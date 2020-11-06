import React from 'react';
import './styles.scss';
import FirstPhoneImage from '../../../Images/FirstScreenPhone.png';
import SecondPhoneImage from '../../../Images/SecondScreenPhone.png';
import ThirdPhoneImage from '../../../Images/ThirdScreenPhone.png';
import FourthPhoneImage from '../../../Images/FourthScreenPhone.png';
import FifthPhoneImage from '../../../Images/FifthScreenPhone.png';
import SixthPhoneImage from '../../../Images/SixthScreenPhone.png';

const MobileApp = () => {
  const imageArray = [
    FirstPhoneImage,
    SecondPhoneImage,
    ThirdPhoneImage,
    FourthPhoneImage,
    FifthPhoneImage,
    SixthPhoneImage,
  ];

  return (
    <main className="mobile-app-container">
      {
        imageArray.map((image) => (
          <div className="image-container">
            <img src={image} alt="cellphone app mock up" />
          </div>
        ))
      }
    </main>
  );
};
export default MobileApp;
