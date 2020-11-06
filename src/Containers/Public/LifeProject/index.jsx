import React from 'react';
import './styles.scss';
import TextConstants from './textConstants';

const LifeProject = () => (
  <main className="life-project-container">
    <h2 className="title">{TextConstants.title}</h2>
    <div className="left-column">
      <div className="introduction">
        {
          Object.values(TextConstants.introduction).map((item, index) => {
            if (index === 0) {
              return (
                <div className="introduction-container">
                  <p className="cite">{item.text}</p>
                  <p className="author">
                    {item.author}
                    {' '}
                    {item.location}
                  </p>
                </div>
              );
            }
            return (
              <div className="questions-container">
                <h4>{item.introduction}</h4>
                <div className="question">
                  <ul>
                    {Object.values(item.questions).map((question) => (
                      <li>{question}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className="community">
        <h3 className="subtitle">{TextConstants.community.title}</h3>
        <p className="explanation">{TextConstants.community.text}</p>
        <ul>
          {
            Object.values(TextConstants.community.list).map((listItem) => (
              <li>{listItem}</li>
            ))
          }
        </ul>
      </div>
    </div>
    <div className="right-column">
      {
        Object.values(TextConstants.timeline).map((year) => (
          <div className="year">
            <h4>{year.year}</h4>
            <ul>
              {
                Object.values(year.items).map((item) => (
                  <li>{item}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  </main>
);

export default LifeProject;
