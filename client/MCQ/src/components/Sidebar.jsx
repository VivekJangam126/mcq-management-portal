import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <h3>Menu</h3>
      <nav>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/addmcq">Add MCQ</StyledLink>
        <StyledLink to="/mymcq">My MCQ</StyledLink>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 200px;
  height: 100vh;
  background: #e5e7eb; /* Tailwind's gray-200 */
  color: #111827; /* Tailwind's gray-900 */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  font-family: "Poppins", sans-serif;

  h3 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 15px 0;
  color: #1f2937;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  padding: 8px 12px;
  transition: 0.3s ease;

  &:hover {
    background-color: #d1d5db; /* Tailwind's gray-300 */
    text-decoration: none;
  }
`;
