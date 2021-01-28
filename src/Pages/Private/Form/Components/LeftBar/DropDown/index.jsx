import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const DropDownComponent = () => (
  <div className="drop-down-menu">
    <ul>
      <li className="main-options" id="lake">
        <Link
          to="/questioner/Lake-Nona/Lake-Nona/0"
          className="btn"
        >
          Lake Nona
        </Link>
        <span className="menu-status">1</span>
      </li>
      <li className="main-options" id="health">
        <p href="" className="btn">Health</p >
        <span className="menu-status">38</span>
        <div className="submenu" id="health-submenu">
          <Link
            to="/questioner/Health/Demographics/0"
            className="options"
          >
            Demographics
          </Link>
          <Link
            to="/questioner/Health/Quality-of-Life/0"
            className="options"
          >
            Quality of Life
          </Link>
          {/* eslint-disable-next-line max-len */}
          <Link
            to="/questioner/Health/Your-Health/0"
            className="options"
          >
            Your Health (Doctor, Prescription)
          </Link>
          <Link
            to="/questioner/Health/Health-Behaviors/0"
            className="options"
          >
            Health Behaviors
          </Link>
        </div>
      </li>
      <li className="main-options" id="mood">
        <p href="" className="btn">Mood</p>
        <span className="menu-status">28</span>
        <ul className="submenu" id="mood-submenu">
          <Link
            to="/questioner/Mood/Oral-Healt/0"
            className="options"
          >
            Oral Health
          </Link>
          <Link
            to="/questioner/Mood/Health-Behavior/0"
            className="options"
          >
            Health Behaviors (Nutrition, Exercise)
          </Link>
          <Link
            to="/questioner/Mood/Low-Mood/0"
            className="options"
          >
            Low Mood
          </Link>
          <Link
            to="/questioner/Mood/Pets/0"
            className="options"
          >
            Pets
          </Link>
          <Link
            to="/questioner/Mood/High-Mood/0"
            className="options">
            High Mood
          </Link>
          <Link
            to="/questioner/Mood/Stressful-Life-Experience/0"
            className="options"
          >
            Stressful Life Experiences
          </Link>
        </ul>
      </li>
      <li className="main-options" id="social">
        <p href="" className="btn">Social</p>
        <span className="menu-status">22</span>
        <ul className="submenu" id="social-submenu">
          <Link
            to="/questioner/Social/Your-Personality/0"
            className="options"
          >
            Your Personality
          </Link>
          <Link
            to="/questioner/Social/Employment/0"
            className="options"
          >
            Employment
          </Link>
          <Link
            to="/questioner/Social/Social-Network/0"
            className="options"
          >
            Social Networks
          </Link>
          <Link
            to="/questioner/Social/Your-Neighborhood/0"
            className="options"
          >
            Your Neighborhood
          </Link>
          <Link
            to="/questioner/Social/Religiousness-&-Spirituality/0"
            className="options"
          >
            Religiousness & Spirituality
          </Link>
          <Link
            to="/questioner/Social/Sleep-Quality/0"
            className="options"
          >
            Sleep Quality Index
          </Link>
        </ul>
      </li>
    </ul>
  </div>
);
export default DropDownComponent;
