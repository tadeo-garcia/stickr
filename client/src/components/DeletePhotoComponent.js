import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePhotoById } from "../store/photos";
import "./deletephoto.css";

function DeletePhotoButton({ currentUserId, photoId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [styleProps, setStyleProps] = useState({right:-350, top: 50})


  const handleDeletePhoto = (e) => {
    e.preventDefault();
    setStyleProps({right: 100, top:50})
    setTimeout(()=>{
      dispatch(deletePhotoById(photoId));
    }, 1000)
    setTimeout(()=>{
      history.push('/dashboard')
    }, 1500)
  };

  return (
    <div>
      <div > 
        {styleProps ? 
          <div className="notification__container-delete" style={styleProps}>
          Photo Successfully Deleted
        </div>
        :
          null
        }
     </div>
      <input type="submit" id="delete-button" onClick={handleDeletePhoto} value='delete this photo'>
        
      </input>
    </div>
  );
}

export default DeletePhotoButton;
