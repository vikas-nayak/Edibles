// Sidebar.jsx

import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div>
      <div className='sidebar'>
        <div className='icons'>
          <div id='restaurant'><FontAwesomeIcon icon={faShop} /></div>
          <div id='home'><FontAwesomeIcon icon={faHouse} /></div>
          <div id='message'><FontAwesomeIcon icon={faMessage} /></div>
          <div id='notifications'><FontAwesomeIcon icon={faBell} /></div>
          <div id='settings'><FontAwesomeIcon icon={faGear} /></div>
          <div id='logout'><FontAwesomeIcon icon={faRightFromBracket} /></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
