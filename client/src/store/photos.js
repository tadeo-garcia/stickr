import Cookies from 'js-cookie';

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_PHOTOS_BY_USER = 'photos/LOAD_PHOTOS_BY_USER';
const LOAD_PHOTO = 'photos/LOAD_PHOTO';
const DELETE_PHOTO = 'photos/DELETE_PHOTO'
// const RECEIVE_PHOTO = '/photos/RECEIVE_PHOTO';

export const loadPhotos = (photos) => {
  return {
    type: LOAD_PHOTOS,
    photos
  };
};

export const loadPhotosByUser = (photos) => {
  return {
    type: LOAD_PHOTOS_BY_USER,
    photos
  }
}

export const loadPhoto = (photo) => {
  return {
    type: LOAD_PHOTO,
    photo
  }
}

export const deletePhoto = (photoId) => {
  return {
    type: DELETE_PHOTO,
    photoId

  }
}

export const getPhotos = () => {
  return async dispatch => {
    const res = await fetch('/api/photos', {
      method: 'get',
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(loadPhotos(res.data.photos))
    }
    return res;
  }
}

export const getPhoto = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/photos/${id}`)
    res.data = await res.json()
    if (res.ok) {
      dispatch(loadPhoto(res.data.photo))
    }
    return res;
  }
}

export const getPhotosByUserId = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/users/${id}/photos`)
    res.data = await res.json();
    if (res.ok) {
      dispatch(loadPhotosByUser(res.data.photos))
    }
    return res;
  }
}

export const deletePhotoById = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/photos/${id}`, {
      method: 'delete',
      headers: {
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      }
    })
    res.data = await res.json()
    if (!res.ok) throw res;
    if (res.ok) {
      dispatch(deletePhoto(id))
    }
  }
}

export default function photosReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PHOTOS:
      return { ...state, list: action.photos };
    case LOAD_PHOTO:
      return { ...state, single: action.photo };
    case LOAD_PHOTOS_BY_USER:
      return { ...state, users: action.photos }
    case DELETE_PHOTO:
      console.log('~~~inside photos reducer~~~~')
      console.log(`${action.photoId}`)
      let newState = state.users.filter((data, i) => (i !== (action.photoId - 1)))
      console.log(newState)
      return newState
    default:
      return state;
  }
}

