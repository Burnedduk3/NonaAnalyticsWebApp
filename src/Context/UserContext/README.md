# Action Creators

The action Creators file is used to write the functions for the Reducer files, the functions that are
stored in this file are long or require more complexity.

this is a list of the Functions programmed here.

Name                   | Description
---------------------- | -------------
addQuestions                | given a state and a payload, it will replace the state values with the payload values
checkUserLocalStorage       | It will check for user data in the local storage  and put it in the context state if there is any value


to see de code [click here](./ActionCreators.ts)

# Action Types

The action types is used to declare the possible actions of the reducer, all of them goes in capital letters and with underscore separating the words.
This is for maintaining a standard throw the code so if an action changes in the string, all the rest of the variables will change.

The possible actions are:

Name                      | Description
-----------------------   | -------------
ADD_USER                  | Adds user information to the context state
DELETE_USER               | Deletes the user information from the user state
EDIT_USER                 | Using a state and a payload, it will change the state with the given payload parameters
ADD_RESPONDED_QUESTIONS   | Keeps track on how many questions the user has responded so far TODO, move this parameter to the `FormQuestionsState`
SEARCH_LOCAL_STORAGE      | Searches the local storage for user related info.

to see de code [click here](./ActionTypes.ts)


# Interface

this file is to declare the types for the Context that are going to be used around the application. there are the
possible types:

Name                       | Description
------------------------   | ----------------- 
IUserState           | This interface is used to declare any user variable that may be needed in any component, all the fetched user data should be mapped here
IUserContextPayload  | The context possible values to be changed
IUserContextReducer  | This interface is used to declare the user reducer
IUserStateContext    | This interface is used to declare the user state context


to see de code [click here](./interface.ts)


# Provider

The provider is composed by two functions.

Name                       | Return Type        | Params                  | Description
------------------------   | ------------------ | ----------------------- |----------------- 
UserProvider   | `JSX Element`      | `React elements`        | This functions is used to wrap the children components of this element with the application state, this component should be used to wrap all the application so any children can access this state.
useUserState        | `IAppStateContext` | `none`                  | This function is used to call the the context hook to call different functions declared in the reducer.

to see de code [click here](./Provider.tsx)

# Reducer

the reducer is where any action is called, the main function contains a reducer where the idea is to declare an action type and the implement it here, if the function is to complex that function should be declare
e on the action creator of have its own separate file.

to see de code [click here](./Reducer.ts)


[GO BACK](../README.md)