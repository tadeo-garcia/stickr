const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_PHOTO = 'photos/LOAD_PHOTO';


export const loadPhotos = (photos) => {
  return {
    type: LOAD_PHOTOS,
    photos
  };
};

export const loadPhoto = (photo) => {
  return {
    type: LOAD_PHOTO,
    photo
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


export default function photosReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PHOTOS:
      // let newState = { ...state, list: action.photos };
      // action.photos.forEach(photo => {
      //   newState[photo.id] = photo
      // })
      return { ...state, list: action.photos };
    case LOAD_PHOTO:

      return { ...state, single: action.photo };
    default:
      return state;
  }
}

