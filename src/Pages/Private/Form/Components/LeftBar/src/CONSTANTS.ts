const LeftBarText = {
  lastSection: {
    title: 'What will we do with this information?',
    // eslint-disable-next-line max-len
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit aliquet massa sit amet facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae quam ligula. ',
  },
};

export interface ILeftBarSubSections {
  text: string;
  code: string;
}

export interface ILeftBarSections {
  [key: string]: {
    text: string;
    subSections: Array<ILeftBarSubSections>;
  };
}

export const LEFT_BAR_SECTIONS: ILeftBarSections = {
  LakeNona: {
    text: 'Lake Nona',
    subSections: [
      {
        text: 'Lake Nona',
        code: 'Lake-Nona',
      },
    ],
  },
  Health: {
    text: 'Health',
    subSections: [
      {
        text: 'Demographics',
        code: 'Demographics',
      },
      {
        text: 'Quality of Life',
        code: 'Quality-of-Life',
      },
      {
        text: 'Your Health',
        code: 'Your-Health',
      },
      {
        text: 'Health Behaviors',
        code: 'Health-Behaviors',
      },
    ],
  },
  Mood: {
    text: 'Mood',
    subSections: [
      {
        text: 'Oral Health',
        code: 'Oral-Healt',
      },
      {
        text: 'Health Behavior',
        code: 'Health-Behavior',
      },
      {
        text: 'Low Mood',
        code: 'Low-Mood',
      },
      {
        text: 'Pets',
        code: 'Pets',
      },
      {
        text: 'High Mood',
        code: 'High-Mood',
      },
      {
        text: 'Stressful Life Experience',
        code: 'Stressful-Life-Experience',
      },
    ],
  },
  Social: {
    text: 'Social',
    subSections: [
      {
        text: 'Your Personality',
        code: 'Your-Personality',
      },
      {
        text: 'Employment',
        code: 'Employment',
      },
      {
        text: 'Social Network',
        code: 'Social-Network',
      },
      {
        text: 'Your Neighborhood',
        code: 'Your-Neighborhood',
      },
      {
        text: 'Religiousness & Spirituality',
        code: 'Religiousness-&-Spirituality',
      },
      {
        text: 'Sleep Quality',
        code: 'Sleep-Quality',
      },
    ],
  },
};

export default LeftBarText;
