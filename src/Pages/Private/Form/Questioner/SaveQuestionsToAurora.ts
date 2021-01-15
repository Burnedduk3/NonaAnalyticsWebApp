import {API, graphqlOperation} from 'aws-amplify';
import {createDemographicInfo} from '../../../../graphql/mutations';

interface tempObject {
    bornInUSA:number,
    yearsInFl:number
}

const saveQuestionsToAurora = async (
    questions: any,
) => {
  const sendToDBObject: tempObject = {
    bornInUSA: 0,
    yearsInFl: 0,
  };

  const keyArray = Object.keys(questions).map((item) => item);

  console.log(keyArray);
  // eslint-disable-next-line guard-for-in
  for (let i = 0; i < keyArray.length; i++) {
    if (i === 0) {
      console.log(questions, i, questions[keyArray[i]]);
      sendToDBObject.bornInUSA = parseInt(questions[keyArray[i]]);
    }
    if (i === 1) {
      sendToDBObject.yearsInFl = questions[keyArray[i]] === 'yes'? 1: 0;
    }
  }

  const {bornInUSA, yearsInFl} = sendToDBObject;

  if (bornInUSA && yearsInFl) {
    const {data, errors}: any = await API.graphql(
        graphqlOperation(
            createDemographicInfo,
            {
              createDemographicInfoInput: {
                id: Math.floor(Math.random() * 60) + 1,
                bornInUSA: bornInUSA,
                yearsInFl: yearsInFl,
              },
            },
        ),
    );
    console.log(data);

    if (errors) {
      throw new Error('Error sending responses to de Database');
    }
  } else {
    throw new Error('No Current form ID or subsection to save info');
  }
};


export default saveQuestionsToAurora;
