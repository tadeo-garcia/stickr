import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadSinglePhoto } from "../store/photos";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
    <div className="upload-photo__container">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="upload-photo__form">
        <input
          type="file"
          className="upload-photo__input"
          id="customPhoto"
          name="file"
          onChange={handleFileChange}
        />
        <textarea rows={2} placeholder="  Add a caption, if you'd like." onChange={handleDescriptionChange} className="upload-photo__input"/>
        <input type="submit" value="Upload" className="uploadButton upload-photo__input" />
      </form>
    </div>
  );
}
