# Nona Analytics Front Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### `yarn install`
This command will install all the packages that are needed to run this application in the development environment.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn jslint`
This command will init a linting process throw all the files with extensions `.js` `.jsx` `.ts` or `.tsx`, this will show where the code is not accomplishing the `google code eslint` standard
running this command like `yarn jslint --fix` will fix almost all the linting errors in any file.

### `yarn csslint`
This command will run a linting process for all the `scss` files inside the `src` folder. running this command like
`yarn csslint --fix` will fix almost all the linting issues on the scss files.

#Additional Comments

* Dockerfile: The docker file is the one used to use the container for this application, it uses four environmental variables that are:
  
  Name  | Description
  -------------          | -------------
  REACT_APP_BACKEND_URL  | The backend URL that is used to make the GraphQL call
  REACT_APP_REGION       | The Region where the `AWS` services are present, in this case it should be US-East-1
  REACT_APP_USER_POOL_ID | The cognito User pool ID that the application is using
  REACT_APP_CLIENT_ID    | The Client id that `cognito` generates in the client section

    after the installation is completed, it will run the command `yarn build` to build the application and serve it with the npm package `serve`


* JenkinsFile: The jenkins file is th one used by the jenkins server to deploy the app to multiple environment, it need the registry to upload the image after the docker build process.
  the pipeline contains the following stages:
  
  Name  | Description
  -------------          | -------------
  setup  | In this Step, jenkins will fetch the project from the github repository and download it to the jenkins host.
  build  | In the build process, jenkins will build the application and put the name that was assigned in the ECR and the tag would be the build number.
  test  |  In this step, the application should run the unit tests using the docker images when the unitary tests are written. delete this steps if the application doesn't have tests.
  push  |  In this step, the created image will be pushed to the chosen registry, and it will be pushed to times, the first time with the build number and the secodn time with the `latest` tag. 
  deploy  |  In this step, the jenkins hosts uses the previously configured `Salt` configuration management tools to deploy the application in the front-end hosts.

# To see design click [here](https://xd.adobe.com/view/5247fc7b-18f3-4624-a308-1dacff276df3-0714/screen/c22c12c8-c40c-457f-bc9d-ad932501cb1d/)

# Next Steps
Continue reading the application Documentation [here](./src/README.md)
