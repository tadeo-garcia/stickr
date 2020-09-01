import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../store/auth';
import './loginnavbar.css';

function LoginNavbar() {
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();
  // const dispatch = useDispatch();
  // const currentUserId = useSelector(state => state.auth.id);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(login(username, password))
  // }


  return (
    <div class='navbar-div'>
      <span><a id='home-link' href='/'>stickr</a></span>
    </div>
  )
};

export default LoginNavbar;