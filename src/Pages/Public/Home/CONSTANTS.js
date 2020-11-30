/* eslint-disable global-require */
const HomeTexts = {
  sections: {
    first: {
      title: 'Our Mission',
      text:
        'Co-innovate with lifestyle medicine providers, fitness and wellness centers, sports performance clubs, and health research institutions. Our company utilizes state-of-the-art people analytics and machine learning based personalization to offer innovative solutions that are designed to double the analytical productivity of our customers, in half of the time and with half the cost. Our team is located in Lake Nona, the global epicenter for innovation in health, wellness and sports technology. We are inspired to positively impact individual’s health locally and internationally.',
      button: {
        color: 'red',
        text: 'Know project',
        type: 'button',
        to: '/life-project',
      },
    },
    second: {
      title: 'What do we do',
      elem1: {
        title: 'How We Do It',
        text: 'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus.',
        img: require('../../../assets/Images/HowWeDoItImage.jpg'),
      }, 
      elem2: {
        title: 'Participate',
        text: 'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus.',
        img: require('../../../assets/Images/ParticipateImage.jpg'),
      }, 
      elem3: {
        title: 'Win Prices',
        text: 'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus.',
        img: require('../../../assets/Images/WinPricesImage.jpg'),
      }, 
      button: {
        color: 'red',
        text: 'Start Survey',
        type: 'button',
        to: '/form',
      },
    },
    third: {
      title: 'Our Team',
      subtitle: 'Colombian Association of Life Style Medicine',
      members: [
        {
          med: false,
          name: 'Cesar Muñoz',
          title: 'PhD Computer Engineering & Management System - CEO Nona Analytics',
        },
        {
          med: false,
          name: 'Rebecca Eggleton',
          title: 'CFO Nona Analytics, Licensed CPA',
        },
        {
          med: false,
          name: 'Fernando Camacho',
          title: 'PhD Biomedical Engineering - Lead Data Scientist',
        },
        {
          med: false,
          name: 'Miguel Angel Valcarcel',
          title: 'Lead Software Engineer Mobile App',
        },
        {
          med: false,
          name: 'Juan David Cabrera',
          title: 'Lead Software Engineer Web / Cloud Plataform',
        },
        {
          med: false,
          name: 'Nicolas Betancur',
          title: 'Machine Learning Engineer',
        },
        {
          med: true,
          name: 'Ana Maria Betancourt',
          title: 'Medical Doctor Specialized Sport & Life Style Medicine Co-founder ASMEVIDA',
        },
        {
          med: true,
          name: 'Simon Villa Arango',
          title: 'PhD Biomedical Engineering - CEO inncremental SAS Co-founder ASMEVIDA',
        },
      ],
    },
  },
};

export default HomeTexts;
/* eslint-enable global-require */
