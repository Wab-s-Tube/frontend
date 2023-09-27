import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import '../styles/Header.css'

const Header = () => {

  const [openMenu, setMenu] = useState(false)
  const menuRef = useRef(null)

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
        <Navbar id="header-nav">
          <Nav className="ml-auto" navbar>
            <button onClick={menuToggle}>Menu</button>
            <CSSTransition
              in={openMenu}
              timeout={500}
              classNames="slide-in-menu"
              unmountOnExit
            >
              <div>
                {openMenu && <div className="overlay" onClick={menuToggle}></div>}
                <div 
                className={`menu-content ${openMenu ? 'menu-open' : ''}`}
                ref={menuRef}
                style={{left: openMenu ? '0' : '-250px'}}>
                  <header>Wab Tube</header>
                  <ul>
                    <li>Test 1</li>
                    <li>Test 2</li>
                    <li>Test 3</li>
                  </ul>
                </div>
              </div>
            </CSSTransition>
          </Nav>
        </Navbar>
      </div>
    </>
  );

};

export default Header;
