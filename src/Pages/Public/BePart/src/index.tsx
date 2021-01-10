import React, {useEffect} from 'react';
import BePartContent from '../Components/BePartContent';
import BePartContentText from './Constants';
import './styles.scss';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  SHOW_FOOTER,
  SHOW_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';

const BePartPage: React.FC = (): JSX.Element => {
  const applicationState = useApplicationState();

  useEffect(()=>{
    applicationState?.appStateDispatch({type: SHOW_HEADER, payload: undefined});
    applicationState?.appStateDispatch({type: SHOW_FOOTER, payload: undefined});
  }, []);
  return (
    <>
      {
        Object.values(BePartContentText.sections).map(
            (item, index) => {
              if (index % 2 === 0) {
                return (
                  <BePartContent
                    key={item.img}
                    align='left'
                    title={item.title}
                    text={item.text}
                    img={item.img}
                  />
                );
              }
              if (index % 2 !== 0) {
                return (
                  <BePartContent
                    key={item.img}
                    align='right'
                    title={item.title}
                    text={item.text}
                    img={item.img}
                  />
                );
              }
              throw new Error('Should not enter here');
            },
        )
      }
    </>
  );
};
export default BePartPage;