/* Amplify Params - DO NOT EDIT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIIDOUTPUT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const aws = require('aws-sdk');
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const {print} = graphql;

const listUnfinishedForms = gql`
    query ListUnfinishedForms {
        listForms(filter: {percentage: {gt: 99}, consent: {eq: true}, sentEmail: {eq: false}}) {
            items {
                UserID
                finished
                percentage
                consent
            }
        }
    }
`;

const questionSleepID = '94f32dbd-bc85-4ab3-affb-5a0bb865fc9b';

exports.handler = async (event) => {
  // TODO implement]
  if (event.FormId) {

  }
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
