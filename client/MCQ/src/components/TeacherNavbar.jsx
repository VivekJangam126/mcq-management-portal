// src/components/TeacherNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TeacherNavbar = () => {
  return (
    <Nav>
      <div className="logo">MCQ Portal | Teacher</div>
      <ul className="nav-links">
        <li>
          <Link to="/teacher/create-subject">Create Subject</Link>
        </li>
        <li>
          <Link to="/teacher/create-group">Create Group</Link>
        </li>
        <li>
          <Link to="/teacher/review-mcqs">Review MCQs</Link>
        </li>
        <li>
          <Link to="/teacher/performance">Performance</Link>
        </li>
        <li>
          <button className="logout">Logout</button>
        </li>
      </ul>
    </Nav>
  );
};

export default TeacherNavbar;

const Nav = styled.nav`
  background-color: #4b0082;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 20px;
    font-weight: bold;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
    align-items: center;

    li {
      a {
        text-decoration: none;
        color: white;
        font-weight: 500;

        &:hover {
          color: #ffd700;
        }
      }

      .logout {
        background: transparent;
        border: 1px solid white;
        color: white;
        padding: 6px 12px;
        cursor: pointer;

        &:hover {
          background: white;
          color: #4b0082;
        }
      }
    }
  }
`;
