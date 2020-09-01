import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import SignupPage from './SignupPage'

export default function Pages() {
  return (
    <>
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
    </>
  )
}