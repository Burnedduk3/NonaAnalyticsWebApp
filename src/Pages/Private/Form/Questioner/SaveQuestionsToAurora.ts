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
      sendToDBObject.yearsInFl = 0;
    }
  }
  console.log(sendToDBObject);
  const {data, errors}: any = await API.graphql(
      graphqlOperation(
          createCustomers,
          {
            createCustomersInput: {
              id: Math.floor(Math.random() * 6000) + 1,
              name: 'test',
              phone: 'test',
              email: 'test',
            },
          },
      ),
  );
  console.log(data);

  if (errors) {
    throw new Error('Error sending responses to de Database');
  }
};

export default saveQuestionsToAurora;
