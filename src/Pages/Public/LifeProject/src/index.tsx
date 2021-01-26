import React, {useEffect} from 'react';
import Milestone from '../Components/Milestone';
import LifeProjectText from './CONSTANTS';
import './styles.scss';
import {MilestoneClass} from '../interfaces/MilestonesInterfaces';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  SHOW_FOOTER,
  SHOW_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';

const LifeProject: React.FC = (): JSX.Element => {
  const applicationState = useApplicationState();

  useEffect(()=>{
    applicationState?.appStateDispatch({type: SHOW_HEADER, payload: undefined});
    applicationState?.appStateDispatch({type: SHOW_FOOTER, payload: undefined});
  }, []);
  return (
    <>
      <div className="contentLife">
        <h3 className="subtitle">{LifeProjectText.firstPart.title}</h3>
        <ul>
          {
            LifeProjectText.firstPart.list.map((item, index) => (
              <li key={`${index}first`}>{item}</li>
            ))
          }
        </ul>
        <h3 className="subtitle">{LifeProjectText.secondPart.title}</h3>
        <p>{LifeProjectText.secondPart.paragraph}</p>
        <ul>
          {
            LifeProjectText.secondPart.list.map((item, index) => (
              <li key={`${index}second`}>{item}</li>
            ))
          }
        </ul>
        <div className="milestones">
          {
            Object.values(LifeProjectText.thirdPart).map((item, index) => {
              const color = index === 2 || index === 3 ? 'prim' : 'second';
              return (
                <Milestone
                  key={`${index}third`}
                  Milestones={
                    new MilestoneClass(
                        item.title,
                        item.text,
                    )
                  }
                  color={color}
                />);
            })
          }
        </div>
      </div>
    </>
  );
};

export default LifeProject;
