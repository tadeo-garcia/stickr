import React from 'react';
import { Link } from 'react-router-dom';
import './footerbar.css';

function FooterBar() {

  return (
    <div id='footerbar-div'>
      <span>
        <a id='footer-link' href='https://github.com/tadeo-garcia/stickr'>Github</a>
        <Link id='footer-link' to='/AboutMe'>About Me</Link>
      </span>
      <div id='icons-div'>
        <a href='https://www.facebook.com/TADEOOO/'><div className='icon-div' id='facebook' /></a>
        <a href='https://twitter.com/adet_o'><div className='icon-div' id='twitter' /></a>
        <a href='https://instagram.com/o76fn3__8'><div className='icon-div' id='insta' /></a>
      </div>
    </div >
  )
};

export default FooterBar;