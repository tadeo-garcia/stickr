import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadSinglePhoto } from "../store/photos";
import { useHistory } from "react-router-dom";

import "./photouploadcomponent.css";

export default function PhotoUploadComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector((state) => state.auth.id);
  const [file, setFile] = useState(null);
  const [fileDescription, setFileDescription] = useState("");

  const handleFileChange = (e) => {
    setFile({
      raw: e.target.files[0],
    });
  };

  const handleDescriptionChange = (e) => {
    setFileDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(uploadSinglePhoto(file, currentUserId, fileDescription));
    history.push('/dashboard')
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="upload-photo">
          <input type="text" placeholder="Add a caption." onChange={handleDescriptionChange} />
       
        </div>
         <input type="submit" value="Upload" className="uploadButton" />
          <input
            type="file"
            className="upload-photo"
            id="customPhoto"
            name="file"
            onChange={handleFileChange}
          />
      </form>
    </>
  );
}
