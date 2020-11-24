import React, { useContext, useEffect } from 'react';
import { graphqlOperation, API } from 'aws-amplify';
import DropConsole from '../../../utils/DropConsole';
import { listQuestions as ListQuestions } from '../../../graphql/queries';
import { HIGH, LOW, MESSAGE } from '../../../utils/DropConsole/CONSTANTS';
import { FormQuestionsContext } from '../../../Context/FormQuestions/Provider';

const InitialFormPage = () => {
  const { state } = useContext(FormQuestionsContext);

  const getQuestions = async () => {
    try {
      const apiQuestions = await API.graphql(graphqlOperation(ListQuestions, { filter: { name: { eq: 'General' } } }));
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
      <h2 className="form-start-title">Lets start</h2>
      <div className="general-questions-container" />
      <main />
    </>
  );
};

export default InitialFormPage;
