import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadSinglePhoto } from "../store/photos";
import { useHistory } from "react-router-dom";

import "./notification.css"
import "./photouploadcomponent.css";

export default function PhotoUploadComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector((state) => state.auth.id);
  const [file, setFile] = useState(null);
  const [fileDescription, setFileDescription] = useState("");
  const [topVar, setTopVar] = useState({top:-100})
  const [enabled, setEnabled] = useState(false)

  const handleFileChange = (e) => {
    setFile({
      raw: e.target.files[0],
    });

    setEnabled(!enabled)
  };

  const handleDescriptionChange = (e) => {
    setFileDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTopVar({top:75})
    setTimeout(()=>{
      dispatch(uploadSinglePhoto(file, currentUserId, fileDescription));
    }, 1000)
    setTimeout(()=>{
      history.push('/dashboard')
    }, 1500)
  };


  return (
    <div className="upload-photo__container">
      <div > 
        {topVar ? 
          <div className="notification__container-upload" style={topVar}>
          Photo Successfully Submitted
        </div>
        :
          null
        }
     </div>
     <form onSubmit={handleSubmit} encType="multipart/form-data" className="upload-photo__form">
        <input
          type="file"
          className="upload-photo__input"
          id="customPhoto"
          name="file"
          onChange={handleFileChange}
        />
        <textarea rows={2} placeholder="  Add a caption, if you'd like." onChange={handleDescriptionChange} className="upload-photo__input"/>
        <button type="submit" disabled={!enabled ? true : false} className="uploadButton" >Upload</button>
      </form>
    </div>
  );
}
