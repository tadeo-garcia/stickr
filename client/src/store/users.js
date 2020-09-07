const LOAD_USER = 'auth/LOAD_USER';
const LOAD_USERS = 'aut/LOAD_USERS';

export const loadUsers = (users) => {
  return {
    type: LOAD_USERS,
    users
  }
}

export const loadUser = (user) => {
  return {
    type: LOAD_USER,
    user
  }
}

export const getUsers = () => {
  return async dispatch => {
    const res = await fetch('/api/users', {
      method: 'get'
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(loadUsers(res.data.users))
    }
    return res;
  }
}


export const getUser = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/users/${id}`)
    res.data = await res.json()
    if (res.ok) {
      dispatch(loadUser(res.data.user))
    }
    return res;
  }
}


export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_USERS:
      // let newState = { ...state, list: action.photos };
      // action.photos.forEach(photo => {
      //   newState[photo.id] = photo
      // })
      return { ...state, list: action.users };
    case LOAD_USER:

      return { ...state, single: action.user };
    default:
      return state;
  }
}

