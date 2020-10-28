import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";
import { getPhoto } from "../store/photos";
import ModalNavbar from "../components/ModalNavBar";
import FooterBar from "../components/FooterBar";
import SingleScrollComponent from "../components/SingleScrollComponent";
import DeletePhotoComponent from "../components/DeletePhotoComponent";
import "./singlephotopage.css";

function SinglePhotoPage() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  const photo = useSelector((state) => state.photos.single);
  const currentUserId = useSelector((state) => state.auth.id);

  if (!currentUserId) return <Redirect to="/" />;

  if (!photo) return null;

  const photoOwner = photo.User.id === currentUserId;

  return (
    <>
      <ModalNavbar />
      <div className="top-container">
        <div id="link-div">
          <Link to="/dashboard" id="dashboard-link">
            {" "}
            Back to photo feed.
          </Link>
        </div>
        <div className="photo-container">
          <div className="photo-div">
            <SingleScrollComponent url={photo.url}></SingleScrollComponent>
          </div>
          <div className="content-div">
            <h4>{photo.description}</h4>
            <h4>created by : {photo.User.username}</h4>
            <br />
            <br />
            {photoOwner ? (
              <DeletePhotoComponent currentUserId={currentUserId} photoId={photo.id} />
            ) : null}
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default SinglePhotoPage;
