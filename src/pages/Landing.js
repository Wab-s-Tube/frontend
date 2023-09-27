import React from "react";
import TestingImage from "../assets/TestingImage.jpeg";

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
        <div className="full-screen-image" style={styles}></div>
      </div>
    </>
  );
};

export default Landing;
