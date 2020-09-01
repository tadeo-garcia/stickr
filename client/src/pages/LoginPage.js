import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import './loginpage.css';

import LoginNavbar from '../components/LoginNavBar';

import background from '../stickr-pics/background-images/12.png'
import logo from '../stickr-pics/stickricon.jpg'

function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(username, password))
  }

  if (currentUserId) return <Redirect to='/' />;

  const mainBackground = {
    backgroundImage: `url(${background})`
  }

  const logoBackground = {
    backgroundImage: `url(${logo})`
  }


  return (
    <>
      <LoginNavbar />
      <div class='main-container' style={mainBackground}>
        <div class='form-container'>
          <div class='form-div'>
            <div id='logo-div' style={logoBackground} />
            <span id='login-text'>Log in to Stickr</span>
            <form id='login-form' onSubmit={handleSubmit}>
              <input class="form-input"
                type='text'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username' />
              <input class="form-input"
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
              <button id='login-button' type='submit'>Sign in</button>
            </form>
            <a href='/demologin' id='demo' >Login with a demo user?</a>
            <span id='member-text'>Not a Stickr member?
              <a href='/signup' id='demo' > Sign up here.</a>
            </span>
          </div>
          <div class='form-footer'>
            <span>Language</span>
            <span>
              <a id='footer-link' href='/help'>Help</a>
              <a id='footer-link' href='/help/privacy'>Privacy</a>
              <a id='footer-link' href='/help/terms'>Terms</a>
            </span>
          </div>
        </div>
      </div >
    </>
  )
};

export default LoginPage;