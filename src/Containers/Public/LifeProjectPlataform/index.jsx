import React from 'react';
import './styles.scss';
import form6 from '../../../Images/Forms – 6.png';
import form7 from '../../../Images/Forms – 7.png';
import form8 from '../../../Images/Forms – 8.png';
import form9 from '../../../Images/Forms – 9.png';
import form10 from '../../../Images/Forms – 10.png';
import form11 from '../../../Images/Forms – 11.png';
import form12 from '../../../Images/Forms – 12.png';
import form13 from '../../../Images/Forms – 13.png';
import form14 from '../../../Images/Forms – 14.png';
import form15 from '../../../Images/Forms – 15.png';
import form16 from '../../../Images/Forms – 16.png';
import form17 from '../../../Images/Forms – 17.png';
import form18 from '../../../Images/Forms – 18.png';
import form19 from '../../../Images/Forms – 19.png';
import form23 from '../../../Images/Forms – 23.png';
import form24 from '../../../Images/Forms – 24.png';
import form25 from '../../../Images/Forms – 25.png';
import form26 from '../../../Images/Forms – 26.png';
import form27 from '../../../Images/Forms – 27.png';
import form28 from '../../../Images/Forms – 28.png';
import form29 from '../../../Images/Forms – 29.png';
import form30 from '../../../Images/Forms – 30.png';

const LifeProjectPlataform = () => {
  const imageArray = [
    form6,
    form7,
    form8,
    form9,
    form10,
    form11,
    form12,
    form13,
    form14,
    form15,
    form16,
    form17,
    form18,
    form19,
    form23,
    form24,
    form25,
    form26,
    form27,
    form28,
    form29,
    form30,
  ];
  return (
    <main className="platform-container">
      {imageArray.map((image) => (
        <div className="image-container">
          <img src={image} alt="platform-mock" />
        </div>
      ))}
    </main>
  );
};

export default LifeProjectPlataform;
