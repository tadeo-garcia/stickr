import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import DashboardPage from './DashboardPage';
import SinglePhotoPage from './SinglePhotoPage';
import UploadPage from './UploadPage';
import UserPage from './UserPage'

export default function Pages() {
  return (
    <>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/dashboard' component={DashboardPage} />
      <Route exact path='/upload' component={UploadPage} />
      <Route path='/user/:id/photo/:id' component={SinglePhotoPage} />
      <Route path='/user/:id' component={UserPage} />
      <Route exact path='/' component={HomePage} />
    </>
  )
}