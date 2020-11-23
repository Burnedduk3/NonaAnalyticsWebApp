import React, { useState } from 'react';
import InitialQuestionHeader from '../../../Components/Form/InitialQuestionsComponents/Header';

const InitialFormContainer = () => {
  const [liveInLakeNona, setLiveInLakeNona] = useState(false);
  const [overAge, setOverAge] = useState(false);
  return (
    <>
      <InitialQuestionHeader />
      <main>

      </main>
    </>
  );
};
