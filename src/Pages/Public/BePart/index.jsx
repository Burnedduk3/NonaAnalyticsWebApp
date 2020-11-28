import React from 'react';
import Button from '../../../Components/Button';
import Footer from '../../../Components/Footer';
import PublicHeader from '../../../Components/Header/PublicHeader';
import BePartContent from './Components/Content';
import BePartContentText from './Constants';
import './styles.scss';

const BePartPage = () => (
  <>
    <PublicHeader page="bePart" />
    <BePartContent details={BePartContentText.sections.first} />
    <BePartContent details={BePartContentText.sections.second} />
    <BePartContent details={BePartContentText.sections.third} />
    <BePartContent details={BePartContentText.sections.fourth} />
    <div className="buttons">
      <div className="btn1">
        <Button details={BePartContentText.buttons.first} />
      </div>
      <div className="btn2">
        <Button details={BePartContentText.buttons.second} />
      </div>
    </div>
    <Footer />
  </>
);

export default BePartPage;
