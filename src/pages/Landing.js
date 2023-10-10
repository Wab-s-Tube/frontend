import React from "react";
import '../styles/Landing.css'
import { useAppContext } from "../AppContext";

import mockVideo from "../mockData/mockVideoData";


const Landing = () => {

  const {openMenu} = useAppContext()

  const styling = openMenu ? "open" : "closed"

  const gridContainer = document.querySelector('.grid-container')

  const test = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];


  test.forEach(testing => {
    const gridItem = document.createElement('div')
    gridItem.classList.add('video-thumb')
    gridItem.textContent = testing
    gridContainer.appendChild(gridItem)
  })

  console.log(test);
  

  return (
    <>
      <div className={"landing-" + styling}>
        <div className="grid-container">
          {/* {test.map((itemtest, index) => {
            <div key={index} classname="video-thumb">
              {itemtest}
            </div>;
          })} */}
        </div>
      </div>
    </>
  );
};

export default Landing;
