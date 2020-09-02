import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './logoutmodal.css';

import { logout } from '../store/auth'

export default function LogoutModal() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const num = Math.ceil(Math.random() * 7)

  const greetuser = [
    '',
    `Hej, ${username}!`,
    `Sawubona, ${username}!`,
    `Bonjour, ${username}!`,
    `Labas, ${username}!`,
    `Bok, ${username}!`,
    `Ni hao, ${username}!`,
    `Selamat datang ${username}!`
  ]

  const greetlanguage = [
    '',
    `Now you know how to greet people in Swedish`,
    `Now you know how to greet people in Zulu`,
    `Now you know how to greet people in French`,
    `Now you know how to greet people in Lithuanian`,
    `Now you know how to greet people in Croatian`,
    `Now you know how to greet people in Mandarin`,
    `Now you know how to greet people in Malaysian`
  ]

  const usergreet = greetuser[num];
  const languagegreet = greetlanguage[num];

  const handleClick = e => {
    e.preventDefault();
    dispatch(logout())
    window.location.reload();
  }

  return (
    <div id="modal-container">
      <div id='greetuser-div'>{usergreet}</div>
      <div id='greetlanguage-div'>{languagegreet}</div>
      <Link to='/uploadphoto' id='upload-link'> Upload your own photos</Link>
      <span id='logout-span' onClick={handleClick}>Log out</span>
    </div>
  )
}

