import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StudentLayout = () => {
  return (
    <Wrapper>
      <Sidebar>
        <div className="logo">STUDENT PANEL</div>
        <nav>
          <StyledLink to="/student">Dashboard</StyledLink>
          <StyledLink to="/student/addmcq">Add MCQ</StyledLink>
          <StyledLink to="/student/mymcq">My MCQs</StyledLink>
        </nav>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export default StudentLayout;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

const Sidebar = styled.aside`
  background: #0f172a;
  color: #fff;
  width: 260px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);

  .logo {
    font-family: "Orbitron", sans-serif;
    font-size: 22px;
    color: #38bdf8;
    margin-bottom: 40px;
    letter-spacing: 1px;
  }

  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: 0.3s ease;
  background: transparent;

  &:hover {
    background: rgba(56, 189, 248, 0.1);
    color: #38bdf8;
  }

  &.active {
    background: #1e293b;
    color: #38bdf8;
  }
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 40px;
  background: #f8fafc;
  overflow-y: auto;
`;
