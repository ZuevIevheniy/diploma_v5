import styled, { css } from "styled-components";
import { NavLink,Link } from "react-router-dom";

export const Wraper = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGreySolid};
  margin: 0 auto;
  padding: 15px 80px;
`;

export const Logo = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;

  & > span {
    &:nth-child(1) {
      color: #1c7ed6;
    }
    &:nth-child(2) {
      color: #1b1116;
    }
    &:nth-child(3) {
      color: #1c7ed6;
    }
  }
`;

export const NavMenu = styled.nav`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;

`;

export const MenuItem = styled.li`

`;


export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.purpleBlack};


  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #1c7ed6;
    transform: scaleX(0); /* Начальная ширина подчеркивания */
    transition: transform 0.3s ease;
  }

  &:hover::after, /* Подчеркивание при наведении */
  &.active::after { /* Подчеркивание активной ссылки */
    transform: scaleX(1); /* Расширение подчеркивания */
  }
`;



export const Sidebar = styled.div`
  padding: 14px 4px 14px 4px;
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.purpleBlack};

`;
