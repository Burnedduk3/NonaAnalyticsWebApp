# Action Creators

The action Creators file is used to write the functions for the Reducer files, the functions that are 
stored in this file are long o require more complexity that simple functions like delete all the state for example
for the application state there are no complex functions therefore for the moment the file is empty

to see de code [click here](./ActionCreators.ts)

# Action Types

The action types is used to declare the possible actions of the reducer, all of them goes in capital letters and with underscore separating the words.
This is for maintaining a standard throw the code so if an action changes in the string, all the rest of the variables will change.

The possible actions are:

Name          | Description
-----------   | -------------
HIDE_HEADER   | Hides the header of the application if called
SHOW_HEADER   | Shows the header of the application if called, the header wont appear if the route is not correct
HIDE_FOOTER   | Hides the footer of the application if called
SHOW_FOOTER   | Show the footer of the application, it will appear on any page
SET_ERROR     | Sets an error state in all the application.
SET_LOADING   | Sets a loading state in all the application

to see de code [click here](./ActionTypes.ts)


# Interface

this file is to declare the types for the Context that are going to be used around the application. there are the
possible types:

Name                       | Description
------------------------   | ----------------- 
IApplicationInitialState   | This is the applications state, this interface is used to initialize the context or to wipe it.
IErrorHandler              | This is for the error handling, this should trigger the error with the respective message
IApplicationPayload        | This is for declaring a payload variable to pass to the reducer so it can accomplish the respective action
IApplicationReducer        | This interface is to declare the application reducer.
IAppStateContext           | This interface is used to declare the Context


to see de code [click here](./interface.ts)


# Provider

The provider is composed by two functions.

Name                       | Return Type        | Params                  | Description
------------------------   | ------------------ | ----------------------- |----------------- 
ApplicationStateProvider   | `JSX Element`      | `React elements`        | This functions is used to wrap the children components of this element with the application state, this component should be used to wrap all the application so any children can access this state.
useApplicationState        | `IAppStateContext` | `none`                  | This function is used to call the the context hook to call different functions declared in the reducer.

to see de code [click here](./Provider.tsx)

# Reducer

the reducer is where any action is called, the main function contains a reducer where the idea is to declare an action type and the implement it here, if the function is to complex that function should be declare
e on the action creator of have its own separate file.

to see de code [click here](./Reducer.ts)


[GO BACK](../README.md)