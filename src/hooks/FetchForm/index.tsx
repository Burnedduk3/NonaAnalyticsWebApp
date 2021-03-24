import {useEffect, useState} from 'react';
import {
  IFormQuestionsContextState, IQuestion, ISection, ISubSection,
} from '../../Context/FormQuestions/interface';
import {useSectionsAndSubSections} from '../GetSections';
import {useQuery} from '@apollo/client';
import {GET_ALL_QUESTIONS} from '../../Config/api/Graphql/QuerySintax';
import {
  FetchedQuestionsAPI, Image,
  IMappedQuestions, Item,
} from '../../Config/api/Graphql/Types';

export const useOrganizeForm = () => {
  const [formState, setFormState] = useState<
      IFormQuestionsContextState | null
      >({
        currentStack: 0,
        questionsAnswered: [],
        currentFormID: '',
        currentProgress: 0,
        currentSubSection: null,
        currentSection: null,
        sections: [],
        finished: false,
        showableQuestions: [],
        totalQuestions: 0,
      });
  const sections = useSectionsAndSubSections();
  const {loading, error, data} = useQuery(GET_ALL_QUESTIONS);

  useEffect(()=>{
    if (!error && data && sections) {
      const fetchedData:FetchedQuestionsAPI = data;
      const questions: Array<IMappedQuestions> = fetchedData.
          SettingUpFormQueries.
          General.
          getAllQuestions.
          data.map((question): IMappedQuestions => (
            {
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
            }
          ));

      const formSections: ISection[] = sections.map(
          (section: ISection): ISection => {
            const subSections: ISubSection[] = section.subSections.map(
                (subSection: ISubSection): ISubSection=>{
                  let maxNumber = 0;
                  const formQuestions: IQuestion[] = questions.reduce((
                      questions: IQuestion[],
                      question:IMappedQuestions,
                  ): IQuestion[] => {
                    if (question.subSection.name === subSection.name) {
                      const items: Item[] = question.items.map(
                          (item: Item) => {
                            return {
                              name: item.name,
                              order: item.order,
                            };
                          });

                      const images: Image[] = question.imagesPath.map(
                          (image: Image) => {
                            return {
                              alt: image.alt,
                              id: image.id,
                              order: image.order,
                              src: image.src,
                            };
                          });
                      if (question.stack > maxNumber) {
                        maxNumber = question.stack;
                      }

                      const mappedQuestion = {
                        stackPhrase: question.stackPhrase,
                        items: items,
                        inputConfirmation: question.inputConfirmation,
                        stack: question.stack,
                        category: question.category,
                        question: question.question,
                        placeHolder: question.placeHolder,
                        imagesPath: images,
                        order: question.order,
                        id: question.id,
                      };
                      questions.push(mappedQuestion);
                    }
                    return questions;
                  }, []);
                  formQuestions.sort((a, b) => {
                    return a.order - b.order;
                  });
                  return {
                    order: subSection.order,
                    id: subSection.id,
                    name: subSection.name,
                    questions: formQuestions,
                    maxStack: maxNumber,
                  };
                });
            subSections.sort((a, b) => {
              return a.order - b.order;
            });
            return {
              id: section.id,
              name: section.name,
              order: section.order,
              subSections: subSections,
            };
          });
      formSections.sort((a, b)=>{
        return a.order - b.order;
      });
      setFormState({
        finished: false,
        currentSection: formSections[0],
        currentSubSection: formSections[0].subSections[0],
        currentProgress: 0,
        currentStack: 0,
        questionsAnswered: [],
        currentFormID: '',
        sections: formSections,
        showableQuestions: [],
        totalQuestions: questions.length,
      });
    }
  }, [loading]);

  return formState;
};
