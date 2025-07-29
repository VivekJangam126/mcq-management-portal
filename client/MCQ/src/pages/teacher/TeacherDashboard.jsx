// src/pages/teacher/TeacherDashboard.jsx
import React from "react";
import styled from "styled-components";
import TeacherNavbar from "../../components/TeacherNavbar";

const TeacherDashboard = () => {
  return (
    <>
      <TeacherNavbar />
      <Wrapper>
        <h1>Welcome, Teacher 👩‍🏫</h1>
        <CardGrid>
          <Card>
            <h3>Create Subject</h3>
            <p>Manage and organize subjects for different divisions.</p>
            <button>Create</button>
          </Card>

          <Card>
            <h3>Create Group</h3>
            <p>Assign groups and set leaders under selected subjects.</p>
            <button>Create</button>
          </Card>

          <Card>
            <h3>Review MCQs</h3>
            <p>Approve or reject MCQ sets submitted by leaders.</p>
            <button>Review</button>
          </Card>

          <Card>
            <h3>Group Performance</h3>
            <p>Track how each group is performing with MCQs.</p>
            <button>View</button>
          </Card>

          <Card>
            <h3>Leader Performance</h3>
            <p>Review MCQ submission quality by leaders.</p>
            <button>Analyze</button>
          </Card>
        </CardGrid>
      </Wrapper>
    </>
  );
};

export default TeacherDashboard;

const Wrapper = styled.div`
  padding: 40px;
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Card = styled.div`
  background: #f4f6fa;
  border-radius: 12px;
  padding: 25px;
  width: 260px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
    color: #2e3a59;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  button {
    background-color: #4285f4;
    color: white;
    border: none;
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #3367d6;
    }
  }
`;
