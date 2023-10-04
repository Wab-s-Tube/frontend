import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav } from "reactstrap";
import { CSSTransition } from "react-transition-group";

//assets
import youtube from '../assets/Youtube-logo.jpg'
import mic from '../assets/microphone.png'
import create from '../assets/create.png'
import user from "../assets/userIcon.png";
import bell from "../assets/notification.png";

//styles
import '../styles/Header.css'

const Header = () => {

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
    if(menuRef.current && !menuRef.current.contains(e.target)){
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
            Menu
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

        <CSSTransition
          in={openMenu}
          timeout={500}
          classNames="slide-in-menu"
          unmountOnExit
        >
          <div>
            <div className="menu-content" ref={menuRef}>
              <header>Wab Tube</header>
              <ul>
                <li>Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
              </ul>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={openMenu}
          timeout={500}
          classNames="fade-in-overlay"
          unmountOnExit
        >
          <div>
            <div className="overlay"></div>
          </div>
        </CSSTransition>
      </div>
    </>
  );

};

export default Header;
