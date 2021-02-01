import React from 'react';
import './styles.scss';
import {ILeftBarSubSections} from '../src/CONSTANTS';
import {
  useFormQuestionState,
} from '../../../../../../Context/FormQuestions/Provider';
import {
  SET_SUBSECTION_BY_MENU,
} from '../../../../../../Context/FormQuestions/ActionTypes';

export interface IDropDownProps{
  subSections: Array<ILeftBarSubSections>
}

const DropDownComponent: React.FC<IDropDownProps> = (
    {
      subSections,
    }: IDropDownProps,
):JSX.Element => {
  const FormApplicationState = useFormQuestionState();

  const handleOnClick = (event: any, item: string) =>{
    FormApplicationState?.formStateDispatch({
      type: SET_SUBSECTION_BY_MENU,
      payload: {
        subSectionName: item,
      },
    });
  };

  return (
    <ul>
      {
        subSections.map(
            (item: ILeftBarSubSections) => {
              return (
                <li
                  key={item.code}
                  onClick={
                    (event) => handleOnClick(event, item.code)
                  }>
                  {item.text}
                </li>
              );
            })
      }
    </ul>
  );
};
export default DropDownComponent;
