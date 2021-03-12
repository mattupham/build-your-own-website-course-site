import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: normal;

  /* Add a black background color to the top navigation */
  .topnav {
    background-color: ${(props) => props.theme.colors.black};
    overflow: hidden;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: ${(props) => props.theme.colors.offWhite};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: ${(props) => props.theme.colors.offWhite};
    color: black;
  }

  /* Add an active class to highlight the current page */
  .topnav a.active {
    background-color: ${(props) => props.theme.colors.aqua};
    color: black;
    font-weight: bold;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
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

const Navbar = (props) => {
  const openNav = () => {
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
        {props.navItems.map((navItem, index) => (
          <a
            key={index}
            href={navItem.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {navItem.title}
          </a>
        ))}
        <a href className="icon" onClick={openNav}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </NavContainer>
  );
};

export default Navbar;
