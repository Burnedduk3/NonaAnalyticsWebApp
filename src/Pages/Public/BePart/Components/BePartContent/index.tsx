import React from 'react';
import './styles.scss';
import { IContentProps } from '../../interfaces/Content';
import BePartSubContainer from '../BePartSubContainer';

const BePartContent: React.FC<IContentProps> = ({
  align,
  img,
  text,
  title,
}: IContentProps): JSX.Element => {
  return (
    <>
      <BePartSubContainer
        img={img}
        text={text}
        alt={title}
        title={title}
        containerClassName={align}
      />
    </>
  );
};

export default BePartContent;
