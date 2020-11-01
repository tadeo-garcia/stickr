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
    // console.log(file);
    // console.log(fileDescription);

    dispatch(uploadSinglePhoto(file, currentUserId, fileDescription));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="upload-photo">
          <input
            type="file"
            className="upload-photo"
            id="customPhoto"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <input type="text" placeholder="description" onChange={handleDescriptionChange} />
        <input type="submit" value="Upload" className="uploadButton" />
      </form>
    </>
  );
}
