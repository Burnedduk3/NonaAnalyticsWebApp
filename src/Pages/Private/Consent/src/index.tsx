import React, {useEffect, useState} from 'react';
import './styles.scss';
import {
  HIDE_FOOTER,
} from '../../../../Context/ApplicationState/ActionTypes';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import CONSTANTS, {AcceptanceStatement} from './CONSTANTS';
import './styles.scss';
import {useFormQuestionState} from '../../../../Context/FormQuestions/Provider';
import {ErrorMessageToast} from '../../../../Components/ErrorMessage';
import {
  IUpdateConsentParams,
  useUpdateConsent,
} from '../../../../hooks/UpdateFormConsent';
import
RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {useHistory} from 'react-router-dom';

const Consent: React.FC = ():JSX.Element =>{
  const applicationState = useApplicationState();
  const [acceptInvitation, setAcceptInvitation] = useState<boolean>(false);
  const formState = useFormQuestionState();
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const updateConsent = useUpdateConsent();
  const history = useHistory();


  useEffect(()=>{
    applicationState.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
  },
  []);

  useEffect(()=>{
    if (redirect) {
      history.replace(
          RoutingConstants.dinamicForm.path,
      );
    }
  },
  [redirect]);


  const onAcceptConsent = async () =>{
    if (formState.formState.currentFormID && acceptInvitation) {
      const {currentFormID} = formState.formState;
      const params: IUpdateConsentParams = {
        variables: {
          formId: currentFormID ? '1' : '1',
        },
      };
      try {
        await updateConsent(params);
        setRedirect(true);
      } catch (err) {
        console.log(err);
        setToggleToast(true);
      }
    } else {
      setToggleToast(true);
    }
  };

  return <>
    <main className="consent-container">
      {<ErrorMessageToast
        message={
          'If you dont accept you wont be able to participate'
        }
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        toggleToast={toggleToast}
        setToggleToast={setToggleToast}
      />}
      <div className="page-container">
        <div className="header-container">
          {
            Object.entries(CONSTANTS.header).map(
                (entry) =>{
                  if (entry[0] === 'mainTitle') {
                    return (
                      <h1
                        key={entry[0]}
                        className={entry[0].toLowerCase()}
                      >
                        {entry[1]}
                      </h1>
                    );
                  }
                  if (entry[0] === 'subTitle') {
                    return (
                      <h2
                        key={entry[0]}
                        className={entry[0].toLowerCase()}
                      >
                        {entry[1]}
                      </h2>
                    );
                  }
                  return ( <h3
                    key={entry[0]}
                    className={entry[0].toLowerCase()}
                  >
                    {entry[1]}
                  </h3>
                  );
                },
            )
          }
        </div>
        {
          Object.entries(CONSTANTS).map(
              (entry)=>{
                if (entry[0] !== 'header') {
                  return Object.entries(entry[1]).map(
                      (htmlContent, index)=>{
                        if (htmlContent[0] === 'title') {
                          return (
                            <h4
                              className={htmlContent[0]}
                              key={htmlContent[0] + index}
                            >
                              {htmlContent[1]}
                            </h4>
                          );
                        }

                        if (htmlContent[0].includes('paragraph')) {
                          return (
                            <p
                              className="paragraph"
                              key={htmlContent[0] + index}
                            >
                              {htmlContent[1]}
                            </p>
                          );
                        }

                        if (htmlContent[0] === 'listElements') {
                          return (
                            <ul
                              className="list-container"
                              key={htmlContent[0] + index}
                            >
                              {
                                Object.values(htmlContent[1]).
                                    map(
                                        (listElement, index) =>{
                                          return (
                                            <li
                                              className="list-element"
                                              key={''+listElement}
                                            >
                                              {''+listElement}
                                            </li>
                                          );
                                        },
                                    )
                              }
                            </ul>
                          );
                        }
                      },
                  );
                }
              },
          )
        }
        <div className={'input-container'}>
          <label htmlFor="accept-invitation">
            <input
              name="accept-invitation"
              type="checkbox"
              checked={acceptInvitation}
              onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                setAcceptInvitation(event.target.checked);
              }}
            />
            {AcceptanceStatement}
          </label>
        </div>
      </div>
      <button
        className="button"
        onClick={()=> onAcceptConsent()}
      >
        Start Survey
      </button>
    </main>
  </>;
};

export default Consent;
