# Sticker
*by Tadeo Garcia - [Visit Sticker](http://stickr-aa.herokuapp.com)*

**Table of Contents**
- [Stickr at a glance](#Stickr-overview)
- [Technologies Used](#technologies-used)
- [Front-end Overview](#front-end-overview)
- [Back-end Overview](#back-end-overview)
- [Moving Forward](#moving-forward)

## Sticker Overview
Stickr is a fullstack web application that is inpsired by the popular photography site, [Flicker](http://www.flickr.com). 

Stickr has a focus on the graffiti community, allowing users to upload and browse stickers from other members from around the world! 

<!-- First Gif of App -->

## Technologies Used
Stickr is composed of a few key technologies that help render a very user-friendly interface on the front-end, while maintaining a fast and efficient data management system on the back-end.

API calls are made from the front-end, React, portion of the application, which are then received in the back-end Express.js run server and dispatched accordingly. 

In addition, to React, Stickr is tied to Amazon Web Services which allows for users to upload and have access to their own collection of stickers.

## Front-end Overview

### React
React is the foundation of the Stickr's front-end architecture. Individual React components are used throughout the site to provide an interface that resembles that of Flickrs, with some minor adjustments that suit Stickr's functionality better. An example of this is a dual layout implementation that allows the user to either view stickers in a grid layout or a scrolling layout, depending on their preference. Below is a code snippet that shows how this is accomplished, as well as Gif showing it in action!

<!-- code snippet and gif of grid/scroll layout -->

### Redux
Redux is also a key ingredient in the front-end's implementation. Redux, react-redux, and redux-thunk work together to manage the application's sstate. With the use of state, Stickr is able to access stickers, and is able to render them fast and efficiently depending on how the React component dispatches and stores them in the Redux store.

All of the front-end technologies listed above, in tandem with AWS, allow the user to upload pictures to their account and add them to their collection!

<!-- uploading pic gif -->

## Back-end Overview

## Express.js
The back-end portion of Stickr is a minimal, but very effective server created by using the Express.js framework. The models, migragtions and seed files are made using sequelize