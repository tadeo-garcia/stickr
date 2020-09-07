import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/users';
import './dashboardsidebar.css'

function DashboardSidebar({ changeDisplayGrid, changeDisplayScroll }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

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
          <a id='user-link' href={link} key={index} >
            {user.username}
          </a>
        )
      })}
      </div>
    </div >
  )
}

export default DashboardSidebar;