import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import LogoutModal from '../components/LogoutModal'


function ModalNavbar() {
  const [displayModal, setDisplayModal] = useState(null)
  const showModal = () => {
    setDisplayModal(<LogoutModal hide={hideModal} />);
  }
  const hideModal = () => {
    setDisplayModal(null);
  }

  return (
    <div id='modal-navbar-div'>
      <span><NavLink id='home-link' to='/'>stickr</NavLink></span>
      <LogoutModal />
      <div class="nav-icons-div">
        <div id='cloud-icon' />
        <div id='avatar-icon' onClick={e => showModal()} />
      </div>
    </div>
  )
};


export default ModalNavbar;