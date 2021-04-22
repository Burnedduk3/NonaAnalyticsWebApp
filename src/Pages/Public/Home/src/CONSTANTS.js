import HowWeDoItImage from '../../../../assets/Images/HowWeDoItImage.jpg';
import ParticipateImage from '../../../../assets/Images/ParticipateImage.jpg';
import WinPricesImage from '../../../../assets/Images/WinPricesImage.jpg';

/* eslint-disable global-require */
const HomeTexts = {
  title: 'What do we do',
  sections: {
    first: {
      title: 'Our Mission',
      text:
        // eslint-disable-next-line max-len
        'Co-innovate with lifestyle medicine providers, fitness and wellness centers, sports performance clubs, and health research institutions. Our company utilizes state-of-the-art people analytics and machine learning based personalization to offer innovative solutions that are designed to double the analytical productivity of our customers, in half of the time and with half the cost. Our team is located in Lake Nona, the global epicenter for innovation in health, wellness and sports technology. We are inspired to positively impact individual’s health locally and internationally.',
      button: {
        text: 'Know project',
        to: '/life-project',
      },
    },
    second: {
      elem1: {
        title: 'How We Do It',
        text: 'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus.',
        img: HowWeDoItImage,
      },
      elem2: {
        title: 'Participate',
        text: 'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus.',
        img: ParticipateImage,
      },
      elem3: {
        title: 'Win Prices',
        text: 'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus.',
        img: WinPricesImage,
      },
    },
    button: {
      text: 'Start Survey',
      to: '/preSurvey',
    },
    third: {
      title: 'Our Team',
      subtitle: 'Colombian Association of Life Style Medicine',
      members: {
        first: [
          {
            role: 'eng',
            name: 'Cesar Muñoz',
            // eslint-disable-next-line max-len
            title:
              'PhD Computer Engineering & Management System - CEO Nona Analytics',
          },
          {
            role: 'eng',
            name: 'Rebecca Eggleton',
            title: 'CFO Nona Analytics, Licensed CPA',
          },
          {
            role: 'eng',
            name: 'Fernando Camacho',
            title: 'PhD Biomedical Engineering - Lead Data Scientist',
          },
          {
            role: 'eng',
            name: 'Miguel Angel Valcarcel',
            title: 'Lead Software Engineer Mobile App',
          },
          {
            role: 'eng',
            name: 'Juan David Cabrera',
            title: 'Lead Software Engineer Web / Cloud Plataform',
          },
          {
            role: 'eng',
            name: 'Nicolas Betancur',
            title: 'Machine Learning Engineer',
          },
        ],
        second: [
          {
            role: 'med',
            name: 'Ana Maria Betancourt',
            // eslint-disable-next-line max-len
            title:
              'Medical Doctor Specialized Sport & Life Style Medicine Co-founder ASMEVIDA',
          },
          {
            role: 'med',
            name: 'Simon Villa Arango',
            // eslint-disable-next-line max-len
            title:
              'PhD Biomedical Engineering - CEO inncremental SAS Co-founder ASMEVIDA',
          },
        ],
      },
    },
  },
};

export default HomeTexts;
/* eslint-enable global-require */
