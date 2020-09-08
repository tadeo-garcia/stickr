import Cookies from 'js-cookie';
import axios from 'axios';

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_PHOTOS_BY_USER = 'photos/LOAD_PHOTOS_BY_USER';
const LOAD_PHOTO = 'photos/LOAD_PHOTO';
const DELETE_PHOTO = 'photos/DELETE_PHOTO'
const RECEIVE_PHOTO = '/photos/RECEIVE_PHOTO';

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

export const uploadPhoto = (newPhoto) => {
  return {
    type: RECEIVE_PHOTO,
    newPhoto
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

export const uploadSinglePhoto = photo => async dispatch => {
  const { description, file, userId } = photo;
  const formData = new FormData();
  formData.append('description', description)
  formData.append('userId', userId)
  formData.appand('file', file)

  try {
    const res = await axios.post('/api/photos/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const photo = res.data;
    dispatch(uploadPhoto(photo))
  } catch (err) {
    if (err.response.status === 500) {
      console.log('There was a problem with the server')
    } else {
      console.log(err.response.data.message)
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
      // let newState = state.users.filter((data, i) => (i !== (action.photoId - 1)))
      return state.users.filter((data, i) => (i !== (action.photoId - 1)))
    case RECEIVE_PHOTO:
      return { ...state, ...action.newPhoto }
    default:
      return state;
  }
}

