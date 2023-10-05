import React from "react";
import TestingImage from "../assets/TestingImage.jpeg";
import '../styles/Landing.css'
import { useAppContext } from "../AppContext";

const Landing = () => {

  const {openMenu} = useAppContext()

  const styling = openMenu ? "open" : "closed"


  return (
    <>
      <div className={"landing-" + styling}>
        <div className="main-list">
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Landing;
