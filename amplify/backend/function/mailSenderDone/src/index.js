/* Amplify Params - DO NOT EDIT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIIDOUTPUT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const aws = require('aws-sdk');
const ses = new aws.SES({region: 'us-east-2'});
const cog = new aws.CognitoIdentityServiceProvider();
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const {print} = graphql;

const listUnfinishedForms = gql`
    query ListUnfinishedForms {
        listForms(filter: {percentage: {gt: 99}, consent: {eq: true}}) {
            items {
                UserID
                finished
                percentage
                consent
            }
        }
    }
`;
exports.handler = async function(event) {
  const Source = 'nicobetancur@icloud.com';
  const ToAddresses = [];
  const TemplateNamednf = 'wemissyoustripo-20210209032818';

  const graphqlData = await axios({
    url: process.env.API_LIFEPROJECTFINALAPP_GRAPHQLAPIENDPOINTOUTPUT,
    method: 'post',
    headers: {
      'x-api-key': process.env.API_LIFEPROJECTFINALAPP_GRAPHQLAPIKEYOUTPUT,
    },
    data: {
      query: print(listUnfinishedForms),
      variables: {
        input: {},
      },
    },
  });

  console.log(graphqlData.data.data.listForms.items);

  const req = {
    'UserPoolId': 'us-east-2_lPhQJM9JQ',
    'Filter': `username = \"${graphqlData.data.data.listForms.items[0].UserID}\"`,
    'AttributesToGet': [
      'email',
      'name',
    ],
  };

  const cognitoResponse = await cog.listUsers(req).promise();

  let name = '';
  let email = '';
  console.log(cognitoResponse.Users);
  cognitoResponse.Users[0].Attributes.map(
      (userAttribute) =>{
        if (userAttribute.Name === 'name') {
          name = userAttribute.Value;
        }
        if (userAttribute.Name === 'email') {
          email = userAttribute.Value;
        }
      },
  );

  ToAddresses.push(email);

  const templateData = JSON.stringify({name: name, percent: graphqlData.data.data.listForms.items[0].percentage});

  const emailParams = {
    Destination: {
      ToAddresses: ToAddresses,
    },
    Source: Source,
    Template: TemplateNamednf,
    TemplateData: templateData,

    Tags: [
      {
        Name: 'STRING_VALUE',
        Value: 'STRING_VALUE',
      },
    ],
  };
  try {
    return ses.sendTemplatedEmail(emailParams).promise();
  } catch (err) {
    console.log(err);
    return err;
  }
};
