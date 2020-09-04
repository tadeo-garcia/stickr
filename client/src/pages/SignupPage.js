import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './authpage.css';

import AuthNavbar from '../components/AuthNavBar';
import FooterBar from '../components/FooterBar';

function SignupPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(username, password, passwordConfirm))
  }

  const handleSubmitDemo = e => {
    e.preventDefault();
    dispatch(login('mkue', 'password'))
  }

  if (currentUserId) return <Redirect to='/' />;

  return (
    <>
      <AuthNavbar />
      <div className='auth-container' >
        <div id='signup-form-container'>
          <div id='signup-form-div'>
            <div id='logo-div' />
            <span id='login-text'>Sign up for Stickr</span>
            <form id='login-form' onSubmit={handleSubmit}>
              <input className="form-input"
                type='text'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username' />
              <input className="form-input"
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
              <input className="form-input"
                type='password'
                name='passwordConfirm'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder='Confirm Password' />
              <button id='form-button' type='submit'>Sign up</button>
            </form>
            <span onClick={handleSubmitDemo} id='demo'>Login with a demo user?</span>
            <span id='member-text'>Already a member?
            <Link to="/login" id='demo'> Login here.</Link></span>
          </div>
        </div>
        <FooterBar />
      </div >
    </>
  )
};

export default SignupPage;