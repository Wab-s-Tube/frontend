import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";

//assets
import youtube from '../assets/Youtube-logo.jpg'
import mic from '../assets/microphone.png'
import create from '../assets/create.png'
import user from "../assets/userIcon.png";
import bell from "../assets/notification.png";
import home from "../assets/homeIcon.png"
import shorts from "../assets/shortsIcon.png"
import subs from "../assets/subcriptIcon.png"
import library from "../assets/libraryIcon.png"
import hamburger from "../assets/hamburgerIcon.png"

//styles
import '../styles/Header.css'
import '../styles/HeaderTran.css'

// Notes for future work:
//   Set menu as initially open when accessing the landing page
//   Setup side bar menue
//   Fix search bar to be more accurate
//   Establish "create" button functionality
//   Establish "notification" button functionality
//   Establish "user" button functionality



const Header = () => {

  const currentPage = useLocation().pathname

  const styling = currentPage.includes("search") ? "watch-menu" : "standard-menu"  

  const [openMenu, setMenu] = useState(false)
  const menuRef = useRef(null)

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()

    console.log(searchTerm);
  }

  const menuToggle = () => {
    setMenu(!openMenu)
  }

  const handleOutsideClick = (e) => {
    if(menuRef.current && !menuRef.current.contains(e.target) && styling.includes("watch")){
      setMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <div className="header">
        <div className="left-side">
          <a href="/">
            <img className="youtube-icon" src={youtube} alt="YouTube Logo" />
          </a>
          <button className="button-menu" onClick={menuToggle}>
            <img
              className="hamburger-icon"
              src={hamburger}
              alt="hamburger icon"
            />
          </button>
        </div>

        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="search-button"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
          <img className="mic-icon" src={mic} alt="mic icon" />
        </div>

        <div className="right-side">
          <a href="/search">
            <img className="create-icon" src={create} alt="create icon" />
          </a>
          <img className="bell-icon" src={bell} alt="bell icon" />
          <img className="user-icon" src={user} alt="user icon" />
        </div>

        {styling.includes("watch") ? (
          ""
        ) : (
          <div className="menu-bar">
            <a href="/login">
              <img className="home-icon" src={home} alt="home icon" />
              <p className="home-text">Home</p>
            </a>
            <img className="shorts-icon" src={shorts} alt="shorts icon" />
            <p className="shorts-text">Shorts</p>
            <p className="home-text">Home</p>
            <img className="subs-icon" src={subs} alt="subcription icon" />
            <p className="subs-text">Subrcriptions</p>
            <img className="library-icon" src={library} alt="library icon" />
            <p className="library-text">Library</p>
          </div>
        )}

        <CSSTransition
          in={openMenu}
          timeout={500}
          classNames={styling}
          unmountOnExit
        >
          <div>
            <div className={styling + "-content"} ref={menuRef}>
              <header>Wab Tube</header>
              <ul>
                <a href="/login">
                  <li>Test 1</li>
                </a>
                <li>Test 2</li>
                <li>Test 3</li>
              </ul>
            </div>
          </div>
        </CSSTransition>
        {styling.includes("watch") ? (
          <CSSTransition
            in={openMenu}
            timeout={500}
            classNames="watch-menu-overlay"
            unmountOnExit
          >
            <div>
              <div className="overlay"></div>
            </div>
          </CSSTransition>
        ) : (
          ""
        )}
      </div>
    </>
  );

};

export default Header;
