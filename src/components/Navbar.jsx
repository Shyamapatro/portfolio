import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    const Navbar = styled.nav`

   
    .navbar-list{
       
        display: flex;
        gap: 4.8rem;
        li{

            list-style: none;
            .navbar-link{
                display:inline-block;
                
                text-decoration: none;
                font-size:1.2rem;
                text-transform:uppercase;
                color: white;
                &:hover,
                &:active{
                color:${({ theme }) => theme.color.helper};
            }
            }
        }
       
    }
   
    `

  return (
    <Navbar>
      <div className="menuIcon">
        <ul className="navbar-list" style={{}}>
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">Services</NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default Navbar;
