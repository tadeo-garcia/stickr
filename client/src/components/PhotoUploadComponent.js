import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { uploadPhoto } from "../store/photos";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./photouploadcomponent.css";

export default function PhotoUploadComponent() {
  // const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector((state) => state.auth.id);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [fileDescription, setFileDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleDescriptionChange = (e) => {
    setFileDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", fileDescription);
    formData.append("userId", currentUserId);

    console.log(formData.get("description"));
    console.log(formData.get("userId"));
    console.log(formData.get("file"));
    // try {
    //   const res = await axios.post('/api/photos/upload/', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //   const { fileName, filePath } = res.data;
    //   setUploadedFile({ fileName, filePath })
    //   history.push('/dashboard')
    // } catch (err) {
    //   if (err.response.status === 500) {
    //     console.log('There was a problem with the server')
    //   } else {
    //     console.log(err.response.data.message)
    //   }
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="upload-photo">
          <input
            type="file"
            className="upload-photo"
            id="customPhoto"
            name="resume"
            onChange={handleFileChange}
          />
        </div>
        <input type="text" placeholder="description" onChange={handleDescriptionChange} />
        <input type="submit" value="Upload" className="uploadButton" />
      </form>
    </>
  );
}
