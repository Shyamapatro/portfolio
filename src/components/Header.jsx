import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color:${({ theme }) => theme.color.bg};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" width={100} height={100} ></img>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};


export default Header;
