import React, { useState } from "react";
import { Navbar, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const Header = () => {

  const [openMenu, setMenu] = useState(false)

  const menuToggle = () => {
    setMenu(!openMenu)
  }

  return (
    <>
      <Navbar id="header-nav">
        <Dropdown nav isOpen={openMenu} toggle={menuToggle}>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Test 1</DropdownItem>
            <DropdownItem>Test 2</DropdownItem>
            <DropdownItem>Test 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    </>
  );

};

export default Header;
