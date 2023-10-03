import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import Youtube from '../assets/Youtube-logo.jpg'
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
          <img className="youtube-icon" src={Youtube} alt="YouTube Logo" />
          <button className="button-menu" onClick={menuToggle}>
            Menu
          </button>
        </div>

        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
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
