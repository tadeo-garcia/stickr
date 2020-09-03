import React from 'react';
import './dashboardsidebar.css'

function DashboardSidebar({ changeDisplayGrid, changeDisplayScroll }) {

  return (
    <div className='sidebar'>
      <button onClick={changeDisplayGrid}>GRID LAYOUT</button>
      <button onClick={changeDisplayScroll}>SCROLL LAYOUT</button>
    </div>
  )
}

export default DashboardSidebar;