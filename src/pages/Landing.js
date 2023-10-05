import React from "react";
import TestingImage from "../assets/TestingImage.jpeg";
import '../styles/Landing.css'

const Landing = () => {

    const styles = {
      backgroundImage: `url(${TestingImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      width: "100vw", // Set width to viewport width
      height: "100vh", // Set height to viewport height'
    };

  return (
    <>
      <div className="landing">
        {/* <div className="full-screen-image" style={styles}></div> */}
        <div className="left-menu">
          <ul>
            <li>Home</li>
          </ul>
        </div>
        <div className="main-list"></div>
      </div>
    </>
  );
};

export default Landing;
