import React from 'react';
import './footerbar.css';

function FooterBar() {

  return (
    <div id='footerbar-div'>
      <span>
        <a id='footer-link' href='https://github.com/tadeo-garcia/stickr'>Github</a>
      </span>
      <div id='icons-div'>
        <a href='https://www.facebook.com/flickr'><div class='icon-div' id='facebook' /></a>
        <a href='https://twitter.com/flickr'><div class='icon-div' id='twitter' /></a>
        <a href='https://instagram.com/flickr'><div class='icon-div' id='insta' /></a>
      </div>
    </div >
  )
};

export default FooterBar;