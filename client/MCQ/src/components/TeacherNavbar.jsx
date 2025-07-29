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
  background-color: #e4e4e4;
  color: #202020;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #202020;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
    align-items: center;

    li {
      a {
        text-decoration: none;
        color: #202020;
        font-weight: 500;
        padding: 6px 12px;
        border-radius: 4px;
        transition: background 0.3s;

        &:hover {
          background-color: #d0d0d0;
        }
      }

      .logout {
        background: #202020;
        border: none;
        color: white;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: #333;
        }
      }
    }
  }
`;
