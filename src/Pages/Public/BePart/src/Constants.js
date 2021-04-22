import WhatWeDoImage from '../../../../assets/Images/WhatWeDoImage.jpg';
import WinPricesImage from '../../../../assets/Images/WinPricesImage.jpg';
import ParticipateImage from '../../../../assets/Images/ParticipateImage.jpg';
import HowWeDoItImage from '../../../../assets/Images/HowWeDoItImage.jpg';

/* eslint-disable global-require */
const BePartContentText = {
  sections: {
    first: {
      title: 'What We Do',
      // eslint-disable-next-line max-len
      text:
        'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus vitae, feugiat consequat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh facilisis nunc fringilla rhoncus ac in erat. Nulla efficitur velit et blandit ultrices. Nullam tellus lectus, sollicitudin a pellentesque sed, hendrerit non turpis. Aliquam ultrices lectus in cursus cursus.',
      img: WhatWeDoImage,
    },
    second: {
      title: 'How We do It',
      // eslint-disable-next-line max-len
      text:
        'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus vitae, feugiat consequat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh facilisis nunc fringilla rhoncus ac in erat. Nulla efficitur velit et blandit ultrices. Nullam tellus lectus, sollicitudin a pellentesque sed, hendrerit non turpis. Aliquam ultrices lectus in cursus cursus.',
      img: HowWeDoItImage,
    },
    third: {
      title: 'Participate',
      // eslint-disable-next-line max-len
      text:
        'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus vitae, feugiat consequat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh facilisis nunc fringilla rhoncus ac in erat. Nulla efficitur velit et blandit ultrices. Nullam tellus lectus, sollicitudin a pellentesque sed, hendrerit non turpis. Aliquam ultrices lectus in cursus cursus.',
      img: ParticipateImage,
    },
    fourth: {
      title: 'Win Prices',
      // eslint-disable-next-line max-len
      text:
        'Morbi sed lobortis eros. Nullam dolor diam, convallis ac purus vitae, feugiat consequat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh facilisis nunc fringilla rhoncus ac in erat. Nulla efficitur velit et blandit ultrices. Nullam tellus lectus, sollicitudin a pellentesque sed, hendrerit non turpis. Aliquam ultrices lectus in cursus cursus.',
      img: WinPricesImage,
    },
  },
  buttons: {
    first: {
      color: 'blue',
      text: 'Download App',
      type: 'button',
      to: '/',
    },
    second: {
      color: 'red',
      text: 'Start Survey',
      type: 'button',
      to: '/preSurvey',
    },
  },
};

export default BePartContentText;
/* eslint-enable global-require */
