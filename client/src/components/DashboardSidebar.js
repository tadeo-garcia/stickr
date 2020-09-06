import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../store/users';
import './dashboardsidebar.css'

function DashboardSidebar({ changeDisplayGrid, changeDisplayScroll }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const usersList = useSelector(state => state.users)


  return (
    <div className='sidebar'>
      <div id='display-icon-div'>
        <div id='grid-icon' onClick={changeDisplayGrid} ></div>
        <div id='scroll-icon' onClick={changeDisplayScroll} ></div>
      </div>
      <div id="users-link-div">
        Stickers
        <br></br>
        by artist:
        {Object.values(usersList).map((user, index) => {
        let link = `/user/${user.id}`
        return (
          <Link id='user-link' to={link} key={index} >
            {user.username}
          </Link>
        )
      })}
      </div>
    </div >
  )
}

export default DashboardSidebar;