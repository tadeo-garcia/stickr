import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './authpage.css';

import LoginNavbar from '../components/LoginNavBar';


function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(username, password))
  }

  const handleSubmitDemo = e => {
    e.preventDefault();
    dispatch(login('mkue', 'password'))
  }

  if (currentUserId) return <Redirect to='/' />;


  return (
    <>
      <LoginNavbar />
      <div class='main-container' >
        <div id='login-form-container'>
          <div id='login-form-div'>
            <div id='logo-div' />
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
            <span onClick={handleSubmitDemo} id='demo'>Login with a demo user?</span>
            <span id='member-text'>Not a Stickr member?
            <Link to="/signup" id='demo'> Sign up here.</Link></span>
          </div>
        </div>
      </div >
    </>
  )
};

export default LoginPage;