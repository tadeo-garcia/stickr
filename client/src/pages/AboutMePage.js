import React from "react";
import ModalNavbar from "../components/ModalNavBar";
import FooterBar from "../components/FooterBar";
import SingleScrollComponent from "../components/SingleScrollComponent";
import "./aboutmepage.css";

function AboutMePage() {
  return (
    <>
      <ModalNavbar />
      <div className="body-container">
        <div className="about-container">
          <SingleScrollComponent url={"/pics/background/sticker.png"} />
          <div className="aboutme-div">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2> Stickr was created using react and redux hooks, as well as express.</h2>
            <br />
            <h2>
              {" "}
              To dive deeper into the code, checkout the link to the github repository at the
              bottom!
            </h2>
            <br />
            <h2>
              {" "}
              In addition to the site, all of the stickers that are under the artist name tsoyok,
              were also created by me!
            </h2>
            <br />
            <h2>
              If you have any questions feel free to contact me, through{" "}
              <a href="mailto:tadeoalyta@gmail.com">email</a>.
            </h2>
            <br />
            <h2>-T. Garcia</h2>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default AboutMePage;
