import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const DropDownComponent = () => (
  <div className="drop-down-menu">
    <ul>
      <li className="main-options" id="lake">
        <a href="#lake" className="btn">Lake Nona</a>
        <span className="menu-status">1</span>
      </li>
      <li className="main-options" id="health">
        <a href="#health" className="btn">Health</a>
        <span className="menu-status">38</span>
        <div className="submenu" id="health-submenu">
          <Link to="#health-submenu" className="options">Demographics</Link>
          <Link to="#health-submenu" className="options">Quality of Life</Link>
          <Link to="#health-submenu" className="options">Your Health (Doctor, Prescription)</Link>
          <Link to="#health-submenu" className="options">Health Behaviors</Link>
        </div>
      </li>
      <li className="main-options" id="mood">
        <a href="#mood" className="btn">Mood</a>
        <span className="menu-status">28</span>
        <ul className="submenu" id="mood-submenu">
          <Link to="#mood-submenu" className="options">Oral Health</Link>
          <Link to="#mood-submenu" className="options">Health Behaviors (Nutrition, Exercise)</Link>
          <Link to="#mood-submenu" className="options">Time Use</Link>
          <Link to="#mood-submenu" className="options">Low Mood</Link>
          <Link to="#mood-submenu" className="options">Pets</Link>
          <Link to="#mood-submenu" className="options">High Mood</Link>
          <Link to="#mood-submenu" className="options">Stressful Life Experiences</Link>
        </ul>
      </li>
      <li className="main-options" id="social">
        <a href="#social" className="btn">Social</a>
        <span className="menu-status">22</span>
        <ul className="submenu" id="social-submenu">
          <Link to="#social-submenu" className="options">Your Personality</Link>
          <Link to="#social-submenu" className="options">Employment</Link>
          <Link to="#social-submenu" className="options">Social Networks</Link>
          <Link to="#social-submenu" className="options">Your Neighborhood</Link>
          <Link to="#social-submenu" className="options">Religiousness & Spirituality</Link>
          <Link to="#social-submenu" className="options">Sleep Quality Index</Link>
        </ul>
      </li>
    </ul>
  </div>
);
export default DropDownComponent;
