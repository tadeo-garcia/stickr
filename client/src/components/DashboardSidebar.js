import React from 'react';
import './dashboardsidebar.css'

function DashboardSidebar({ changeDisplayGrid, changeDisplayScroll }) {

  return (
    <div className='sidebar'>
      <div id='display-icon-div'>
        <div id='grid-icon' onClick={changeDisplayGrid} ></div>
        <div id='scroll-icon' onClick={changeDisplayScroll} ></div>
      </div>
    </div >
  )
}

export default DashboardSidebar;