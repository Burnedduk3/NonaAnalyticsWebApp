import React, { useContext, useEffect } from 'react';
import { graphqlOperation, API } from 'aws-amplify';
import InitialQuestionHeader from '../../../Components/Form/InitialQuestionsComponents/Header';
import DropConsole from '../../../utils/DropConsole';
import { HIGH, LOW, MESSAGE } from '../../../utils/DropConsole/CONSTANTS';
import { listQuestions as ListQuestions } from '../../../graphql/queries';
import { FormQuestionsContext } from '../../../Context/FormQuestions/Provider';

const InitialFormPage = () => {
  const { state } = useContext(FormQuestionsContext);

  const getQuestions = async () => {
    try {
      const apiQuestions = await API.graphql(graphqlOperation(ListQuestions));
      DropConsole(MESSAGE, apiQuestions);
      DropConsole(LOW, state);
    } catch (e) {
      if (e instanceof Error) {
        DropConsole(HIGH, e.message);
      }
      DropConsole(HIGH, e);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (

    <>
      <InitialQuestionHeader />
      <main />
    </>
  );
};

export default InitialFormPage;
