import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import logo from "../../assets/logo.png"; // make sure the logo path is correct

const LeaderNavbar = () => {
  return (
    <NavWrapper>
      <div className="nav-center">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h2>Leader Panel</h2>
        <div className="nav-links">
          <StyledLink to="/leader/dashboard">Dashboard</StyledLink>
          <StyledLink to="/leader/students">My Students</StyledLink>
          <StyledLink to="/leader/mcqs">MCQ Review</StyledLink>
        </div>
      </div>
    </NavWrapper>
  );
};

export default LeaderNavbar;

// Styled Components
const NavWrapper = styled.nav`
  background-color: #1e1e2f;
  padding: 15px 30px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 40px;
    margin-right: 10px;
  }

  h2 {
    font-family: "Orbitron", sans-serif;
    font-size: 20px;
    margin: 0 15px;
    flex: 1;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00ffd5;
  }
`;
