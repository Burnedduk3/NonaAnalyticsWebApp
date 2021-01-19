import {API, graphqlOperation} from 'aws-amplify';
import {createCustomers} from '../../../../graphql/mutations';

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

  for (let i = 0; i < keyArray.length; i++) {
    if (i === 0) {
      sendToDBObject.bornInUSA = parseInt(questions[keyArray[i]]);
    }
    if (i === 1) {
      sendToDBObject.yearsInFl = questions[keyArray[i]] === 'yes'? 1: 0;
    }
  }

  const {bornInUSA, yearsInFl} = sendToDBObject;
  console.log(sendToDBObject);
  if (bornInUSA && yearsInFl) {
    const {data, errors}: any = await API.graphql(
        graphqlOperation(
            createCustomers,
            {
              createDemographicInfoInput: {
                id: Math.floor(Math.random() * 6000) + 1,
                bornInUSA: 'test',
                yearsInFl: 'test',
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
