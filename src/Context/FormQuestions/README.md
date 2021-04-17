# Action Creators

The action Creators file is used to write the functions for the Reducer files, the functions that are
stored in this file are long or require more complexity.

this is a list of the Functions programmed here.

Name                   | Description
---------------------- | -------------
nextQuestions          | Given a state, it will calculate the next set, subsection or section depending on the limits of each, and the will replace the variables `currentSection`, `currentSubSection` and `currentStack` with the respective information
previousQuestion       | Given a state, it will calculate the previous set, subsection or section depending on the limits of each, and the will replace the variables `currentSection`, `currentSubSection` and `currentStack` with the respective information
updateQuestionAnswer   | Given a state and a payload, it will find the answer of a question and change it with the payload.
setShowableQuestions   | Given a state, it will calculate the questions that are meant to be displayed in the screen depending on the `currentSection`, `currentSubSection` and `currentStack`. this questions are stored in the variables `showableQuestions` to be displayed or used in the components that needs it.
setByMenu              | Sets the `currentSection`, `currentSubSection` and `currentStack`, depending on the option clicked in the menu.
setQuestionResponse    | Given a state and a payload, it will create and store an answered questions and store the results and some metadata into `questionsAnswered`, this functions is used for the first time that a user answers a question.


to see de code [click here](./ActionCreators.ts)

# Action Types

The action types is used to declare the possible actions of the reducer, all of them goes in capital letters and with underscore separating the words.
This is for maintaining a standard throw the code so if an action changes in the string, all the rest of the variables will change.

The possible actions are:

Name                        | Description
-------------------------   | -------------
GET_SECTIONS                | This action will receive a payload with the fetched sections and stores them into the variable `sections`
NEXT_QUESTIONS              | Triggers the function `nextQuestions`, and save the result of the function to the local storage
UPDATE_ANSWERED_QUESTIONS   | Triggers the function `updateQuestionAnswer`, and saves the result to the local storage
SEARCH_STORAGE_QUESTIONER   | Searches the local storage to retrieve the value of the saved Survey
SET_SHOWABLE_QUESTIONS      | Triggers the functions `setShowableQuestions`, and saves the result to the local storage
SET_SUBSECTION_BY_MENU      | Triggers the function `setByMenu`, and saves the result to the local storage
RESET_FORM_STORAGE          | Cleans the local storage
SET_CURRENT_FORM_ID         | Sets the current ID for the survey that is being answered.
PREVIOUS_QUESTION           | Triggers the function `previousQuestion`, and saves the result to the local storage
SET_QUESTION_RESPONSE       | Triggers the functions `setQuestionResponse`, and saves the result into the local storage

to see de code [click here](./ActionTypes.ts)


# Interface

this file is to declare the types for the Context that are going to be used around the application. there are the
possible types:

Name                         | Description
--------------------------   | ----------------- 
IFormQuestionsContextState   | Is the interface used to declare the estate of the application. there is all the metadata for the application to work.
IFormQuestionsContextPayload | Is the payload to update any part of the `FormContextState`
IFormQuestionsContextReducer | Is the interface to declare the reducer of the application
IFormQuestionsContext        | Is the interface to declare the context of the application
ISection                     | Is the interface to declare any section inside the application, the fetched sections are mapped into this interface
IAnsweredQuestion            | Is the interface to declare any answered questions inside the application.
IAnsweredQuestionPayload     | Is the payload to update the respective questions to its respective response.
ISubSection                  | Is the interface to declare any Subsection declared in this application, the fetched subsections are mapped to this interface
IQuestion                    | Is the interface to declare a question inside the application, the fetched questions are mapped here.
ICategory                    | Is the interface to declare a question category inside the application, all the categories are mapped to this interface


to see de code [click here](./interface.ts)


# Provider

The provider is composed by two functions.

Name                       | Return Type        | Params                  | Description
------------------------   | ------------------ | ----------------------- |----------------- 
FormQuestionProvider   | `JSX Element`      | `React elements`        | This functions is used to wrap the children components of this element with the application state, this component should be used to wrap all the application so any children can access this state.
useFormQuestionState        | `IAppStateContext` | `none`                  | This function is used to call the the context hook to call different functions declared in the reducer.

to see de code [click here](./Provider.tsx)

# Reducer

the reducer is where any action is called, the main function contains a reducer where the idea is to declare an action type and the implement it here, if the function is to complex that function should be declare
e on the action creator of have its own separate file.

to see de code [click here](./Reducer.ts)


[GO BACK](../README.md)