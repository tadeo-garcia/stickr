import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import LogoutModal from '../components/LogoutModal'

function ModalNavbar() {
  const [displayModal, setDisplayModal] = useState(null)
  const hideModal = (e) => {
    e.stopPropagation();
    setDisplayModal(null);
  }

  const showModal = () => {
    setDisplayModal(<LogoutModal hideModal={hideModal} />);
  }

  return (
    <div id='modal-navbar-div'>
      <span><NavLink id='home-link' to='/'>stickr</NavLink></span>
      <div className="nav-icons-div">
        <div id='cloud-icon' />
        <div id='avatar-icon' onClick={e => showModal()} >
          {displayModal}
        </div>
      </div>
    </div>
  )
};


export default ModalNavbar;