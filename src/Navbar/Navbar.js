import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #000000;
    overflow: hidden;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add an active class to highlight the current page */
  .topnav a.active {
    background-color: #4caf50;
    color: white;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
      cursor: pointer;
    }
  }

  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
    .topnav.responsive {
      position: relative;
    }
    .topnav.responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;

const Navbar = () => {
  const openNav = () => {
    console.log("OPEN NAV");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <NavContainer>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">Github</a>
        <a href="#contact">LinkedIn</a>
        <a href="#about">About</a>
        <a href className="icon" onClick={openNav}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </NavContainer>
  );
};

export default Navbar;
