import React from 'react';
import LifeProjectText from './CONSTANTS';
import './styles.scss';
import PublicHeader from '../../../Components/Header/PublicHeader';
import Footer from '../../../Components/Footer';
import Milestone from './Components/Milestone';

const LifeProject = () => (
  <>
    <PublicHeader page="lifeProject" />
    <div className="content">
      <h3 className="subtitle">{LifeProjectText.firstPart.title}</h3>
      <ul>
        {
          LifeProjectText.firstPart.list.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${index}first`}>{item}</li>
          ))
        }
      </ul>
      <h3 className="subtitle">{LifeProjectText.secondPart.title}</h3>
      <p>{LifeProjectText.secondPart.paragraph}</p>
      <ul>
        {
          LifeProjectText.secondPart.list.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${index}second`}>{item}</li>
          ))
        }
      </ul>
      <div className="milestones">
        {
          Object.values(LifeProjectText.thirdPart).map((item, index) => {
            const color = index === 2 || index === 3 ? 'prim' : 'second';
            // eslint-disable-next-line react/no-array-index-key
            return <Milestone key={`${index}third`} item={item} color={color} />;
          })
        }
      </div>
    </div>
    <Footer />
  </>
);

export default LifeProject;
