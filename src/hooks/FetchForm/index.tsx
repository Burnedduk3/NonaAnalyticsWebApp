import { useEffect, useState } from 'react';
import {
  IFormQuestionsContextState,
  IQuestion,
  ISection,
  ISubSection,
} from '../../Context/FormQuestions/interface';
import { useSectionsAndSubSections } from '../GetSections';
import { useQuery } from '@apollo/client';
import { GET_ALL_QUESTIONS } from '../../Config/api/Graphql/QuerySintax';
import {
  FetchedQuestionsAPI,
  Image,
  IMappedQuestions,
  Item,
} from '../../Config/api/Graphql/Types';

export const useOrganizeForm = () => {
  const stateCandidate = localStorage.getItem('QUESTIONER_STORAGE');
  const oldForm = JSON.parse(stateCandidate ? stateCandidate : '{}');
  const [formState, setFormState] = useState<IFormQuestionsContextState | null>({
    currentStack: 0,
    questionsAnswered: [],
    currentFormID: '0',
    currentProgress: 0,
    currentSubSection: null,
    currentSection: null,
    sections: [],
    finished: false,
    showableQuestions: [],
    totalQuestions: 0,
  });
  const sections = useSectionsAndSubSections();
  const { loading, error, data } = useQuery(GET_ALL_QUESTIONS);
  useEffect(() => {
    try {
      if (!error && data && sections) {
        const fetchedData: FetchedQuestionsAPI = data;
        const questions: Array<IMappedQuestions> = fetchedData.SettingUpFormQueries.General.getAllQuestions.data.map(
          (question): IMappedQuestions => ({
            id: question.id,
            category: {
              id: question.category.id,
              name: question.category.name,
            },
            inputConfirmation: question.inputConfirmation,
            order: question.order,
            placeHolder: question.placeHolder,
            question: question.question,
            stack: question.stack,
            stackPhrase: question.stackPhrase,
            imagesPath: question.imagesPath,
            items: question.items,
            subSection: {
              name: question.subSection.name,
              id: question.subSection.id,
              order: question.subSection.order,
            },
          })
        );

        const formSections: ISection[] = sections.map(
          (section: ISection): ISection => {
            const subSections: ISubSection[] = section.subSections.map(
              (subSection: ISubSection): ISubSection => {
                let maxNumber = 0;
                const formQuestions: IQuestion[] = questions.reduce(
                  (
                    questions: IQuestion[],
                    question: IMappedQuestions
                  ): IQuestion[] => {
                    if (question.subSection.name === subSection.name) {
                      let items: Item[] = [];
                      if (question.category.name === 'Combo') {
                        items = [{ name: 'Choose One', order: 1 }];
                      }
                      items = [
                        ...items,
                        ...question.items.map((item: Item) => {
                          return {
                            name: item.name,
                            order: item.order,
                          };
                        }),
                      ];

                      const images: Image[] = question.imagesPath.map(
                        (image: Image) => {
                          return {
                            alt: image.alt,
                            id: image.id,
                            order: image.order,
                            src: image.src,
                          };
                        }
                      );
                      if (question.stack > maxNumber) {
                        maxNumber = question.stack;
                      }

                      const mappedQuestion: IQuestion = {
                        stackPhrase: question.stackPhrase,
                        items: items,
                        inputConfirmation: question.inputConfirmation,
                        stack: question.stack,
                        category: question.category,
                        question: question.question,
                        placeHolder: question.placeHolder,
                        imagesPath: images,
                        showOther: false,
                        order: question.order,
                        show: true,
                        id: question.id,
                      };
                      questions.push(mappedQuestion);
                    }
                    return questions;
                  },
                  []
                );
                formQuestions.sort((a, b) => {
                  return a.stack - b.stack;
                });
                for (let i = 0; i < formQuestions.length; i++) {
                  formQuestions[i].question = `${i + 1}. ${
                    formQuestions[i].question
                  }`;
                  formQuestions[i].order = i;
                }
                return {
                  order: subSection.order,
                  id: subSection.id,
                  name: subSection.name,
                  questions: formQuestions,
                  maxStack: maxNumber,
                };
              }
            );
            subSections.sort((a, b) => {
              return a.order - b.order;
            });
            return {
              id: section.id,
              name: section.name,
              order: section.order,
              subSections: subSections,
            };
          }
        );
        formSections.sort((a, b) => {
          return a.order - b.order;
        });
        setFormState({
          finished: false,
          // eslint-disable-next-line max-len
          currentSection: oldForm.currentSection
            ? oldForm.currentSection
            : formSections[0],
          // eslint-disable-next-line max-len
          currentSubSection: oldForm.currentSubSection
            ? oldForm.currentSubSection
            : formSections[0].subSections[0],
          // eslint-disable-next-line max-len
          currentProgress: oldForm.currentProgress ? oldForm.currentProgress : 0,
          currentStack: oldForm.currentStack ? oldForm.currentStack : 0,
          // eslint-disable-next-line max-len
          questionsAnswered: oldForm.questionsAnswered
            ? oldForm.questionsAnswered
            : [],
          currentFormID: oldForm.currentFormID ? oldForm.currentFormID : '',
          sections: formSections,
          showableQuestions: [],
          totalQuestions: questions.length,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading, sections]);

  return formState;
};
