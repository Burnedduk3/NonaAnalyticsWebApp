import React from 'react';
import BePartContent from './Components/BePartContent';
import BePartContentText from './Constants';
import './styles.scss';

const BePartPage: React.FC = (): JSX.Element => (
  <>
    {
      Object.values(BePartContentText.sections).map(
          (item, index) => {
            if (index % 2 === 0) {
              return (
                <BePartContent
                  key={item.img}
                  align='left'
                  title={item.title}
                  text={item.text}
                  img={item.img}
                />
              );
            }
            if (index % 2 !== 0) {
              return (
                <BePartContent
                  key={item.img}
                  align='right'
                  title={item.title}
                  text={item.text}
                  img={item.img}
                />
              );
            }
            throw new Error('Should not enter here');
          },
      )
    }
  </>
);

export default BePartPage;
