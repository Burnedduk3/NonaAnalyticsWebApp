import React from 'react';
import './styles.scss';
import { IBePartSubContainer } from '../../interfaces/BePartSubContainerInterface';

const BePartSubContainer: React.FC<IBePartSubContainer> = ({
  alt,
  img,
  containerClassName,
  text,
  title,
}: IBePartSubContainer): JSX.Element => (
  <div className="content-be-part">
    <div className={`wrapper-be-part wrapper-be-part-${containerClassName}`}>
      <div className="one">
        <img src={img} alt={alt} className="img-be-part" />
      </div>
      <div className="two">
        <h2 className="be-part-text">{title}</h2>
        <p className="be-part-text">{text}</p>
      </div>
    </div>
  </div>
);

export default BePartSubContainer;
