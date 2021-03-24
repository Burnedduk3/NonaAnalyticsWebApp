import {useEffect, useState} from 'react';
import {
  IFormQuestionsContextState,
} from '../../Context/FormQuestions/interface';
import {useSectionsAndSubSections} from '../GetSections';
import {useQuery} from '@apollo/client';
import {GET_ALL_QUESTIONS} from '../../Config/api/Graphql/QuerySintax';
import {
  FetchedQuestionsAPI,
  IMappedQuestions,
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
      console.log(data);
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
              subSection: {
                name: question.subSection.name,
                id: question.subSection.id,
                order: question.subSection.order,
              },
            }
          ));
      console.log(sections);
      console.log(questions);
    }
    setFormState(null);
  }, [loading]);
  return formState;
};
