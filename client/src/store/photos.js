const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_PHOTO = 'photos/LOAD_PHOTO';


export const loadPhotos = (photos) => {
  return {
    type: LOAD_PHOTOS,
    photos
  };
};

export const loadPhoto = (id) => {
  return {
    type: LOAD_PHOTO,
    id
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


export default function photosReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PHOTOS:
      let newState = {};
      action.photos.forEach(photo => {
        newState[photo.id] = photo
      })
      return newState;
    case LOAD_PHOTO:
      return {};
    default:
      return state;
  }
}

