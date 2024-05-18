import { Wraper, NavMenu, Logo, MenuList, MenuItem, StyledLink, Sidebar } from "./Header.styled";

export default function Header() {


  return (
    <Wraper>
      <NavMenu>
        <Logo to="/">
          <span>Drive </span>
          <span>Fix</span>
        </Logo>
        <MenuList>
        <MenuItem>
            <StyledLink to="/" >About as</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/create" >Create orders</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/orders" >All orders</StyledLink>
          </MenuItem>
        </MenuList>
        <Sidebar>Sidebar </Sidebar>
      </NavMenu>
    </Wraper>
  );
}
