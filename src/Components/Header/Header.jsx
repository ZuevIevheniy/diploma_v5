import React, { useState } from "react";
import { Wraper, NavMenu, Logo, MenuList, MenuItem, StyledLink, Sidebar } from "./Header.styled";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const password = prompt("Please enter the administrator password");

    if (password === "admin123") {
      setIsLoggedIn(true);
      return true;
    } else {
      alert("Invalid password. Access denied.");
      return false;
    }
  };

  const handleOrdersClick = (e) => {
    if (!isLoggedIn && !handleLogin()) {
      e.preventDefault();
    }
  };

  return (
    <Wraper>
      <NavMenu>
        <Logo to="/">
          <span>Drive </span>
          <span>Fix</span>
        </Logo>
        <MenuList>
          <MenuItem>
            <StyledLink to="/">About as</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/create">Create orders</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/orders" onClick={handleOrdersClick}>All orders</StyledLink>
          </MenuItem>
        </MenuList>
        <Sidebar>Sidebar</Sidebar>
      </NavMenu>
    </Wraper>
  );
}