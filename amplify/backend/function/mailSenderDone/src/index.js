/* Amplify Params - DO NOT EDIT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIIDOUTPUT
	API_LIFEPROJECTFINALAPP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  // TODO implement
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
