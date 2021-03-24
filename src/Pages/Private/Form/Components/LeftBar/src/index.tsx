import React, {useState} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colors from '../../../../../../Global/js/colors';
import logo from '../../../../../../assets/Logos/logo.png';
import DropDownComponent from '../DropDown';
import LeftBarText, {
} from './CONSTANTS';
import {
  useFormQuestionState,
} from '../../../../../../Context/FormQuestions/Provider';
import './styles.scss';
import {useSectionsAndSubSections} from '../../../../../../hooks/GetSections';

interface IShowHideOptions{
    [key:string]: boolean;
    LakeNona: boolean;
    Health: boolean;
    Social: boolean;
    Mood: boolean;
}


const LeftBar: React.FC = ():JSX.Element => {
  const formState = useFormQuestionState();
  const sections = useSectionsAndSubSections();
  const [showOptions, setShowOptions] = useState<IShowHideOptions>({
    LakeNona: false,
    Health: false,
    Social: false,
    Mood: false,
  });

  const handleOnClick = (event: any, key: string) =>{
    const newState:IShowHideOptions = {
      LakeNona: false,
      Health: false,
      Social: false,
      Mood: false,
    };
    newState[key] = !newState[key];
    setShowOptions({...newState});
  };

  return (
    <aside className="aside-menu">
      <div className="header-aside-container">
        <div className="form-nona-logo-container">
          <img className="form-nona-logo" src={logo} alt="Nonalogo" />
        </div>
        <div className="progress-bar-container">
          <CircularProgressbar
            value={
                formState?.formState.currentProgress?
                formState?.formState.currentProgress:
                0
            }
            text={`${formState?.formState.currentProgress}%`}
            styles={buildStyles(
                {
                  trailColor: colors.progressBackGround,
                  pathColor: colors.secondaryColor,
                  textColor: colors.creamWhiteBackground,
                })}
          />
          <p className="progress-bar-subtitle">Survey Progress</p>
        </div>
      </div>
      <div className="drop-down-menu">
        {
          sections && (
            sections.map((section)=>{
              const objectKey = section.name.replaceAll('-', '');
              return (
                <ul
                  key={section.name}
                  onClick={(event) =>
                    handleOnClick(event, objectKey)}
                >
                  <li
                    className="main-options"
                    id="health"
                  >
                    <p>{section.name.replaceAll('-', ' ')}</p>
                  </li>
                  <li
                    className={`sub-item ${showOptions[objectKey]?
                          'show':
                          'hide'}`}
                  >
                    <DropDownComponent
                      selectors={['element-list']}
                      subSections={section.subSections}
                    />
                  </li>
                </ul>
              );
            })
          )
        }
      </div>
      <div className="last-section">
        <h4 className="last-section-title">{LeftBarText.lastSection.title}</h4>
        {/* eslint-disable-next-line max-len */}
        <p className="last-section-content">{LeftBarText.lastSection.content}</p>
      </div>
    </aside>
  );
};

export default LeftBar;
