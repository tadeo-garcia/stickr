import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage'
import HomePage from './HomePage'

export default function Pages() {
  return (
    <>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/' component={HomePage} />
    </>
  )
}