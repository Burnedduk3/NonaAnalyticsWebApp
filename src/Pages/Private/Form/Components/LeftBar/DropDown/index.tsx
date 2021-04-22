import React from 'react';
import { useFormQuestionState } from '../../../../../../Context/FormQuestions/Provider';
import { SET_SUBSECTION_BY_MENU } from '../../../../../../Context/FormQuestions/ActionTypes';
import { ISubSection } from '../../../../../../Context/FormQuestions/interface';

export interface IDropDownProps {
  subSections: Array<ISubSection>;
  selectors: Array<string>;
}

const DropDownComponent: React.FC<IDropDownProps> = ({
  subSections,
  selectors,
}: IDropDownProps): JSX.Element => {
  const FormApplicationState = useFormQuestionState();

  const handleOnClick = (event: any, subSectionName: string) => {
    FormApplicationState?.formStateDispatch({
      type: SET_SUBSECTION_BY_MENU,
      payload: {
        subSectionName: subSectionName,
      },
    });
  };

  return (
    <ul>
      {subSections.map((subSection: ISubSection) => {
        return (
          <li
            className={selectors.join(' ')}
            key={`${subSection.id}-${subSection.name}-li`}
            onClick={(event) => handleOnClick(event, subSection.name)}
          >
            {subSection.name.replaceAll('-', ' ')}
          </li>
        );
      })}
    </ul>
  );
};
export default DropDownComponent;
