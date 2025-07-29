// src/pages/teacher/CreateGroup.jsx
import React, { useState } from "react";
import styled from "styled-components";
import TeacherNavbar from "../../components/TeacherNavbar";

const CreateGroup = () => {
  const [division, setDivision] = useState("");
  const [subject, setSubject] = useState("");
  const [groupName, setGroupName] = useState("");
  const [leader, setLeader] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      division,
      subject,
      groupName,
      leader,
    });
    // TODO: Add API call to store group info
    alert("Group created and leader assigned!");
  };

  return (
    <>
      <TeacherNavbar />
      <Wrapper>
        <h2>Create Group and Assign Leader</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Division:
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="A">Division A</option>
              <option value="B">Division B</option>
            </select>
          </label>

          <label>
            Subject:
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
            </select>
          </label>

          <label>
            Group Name:
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="e.g., Group Alpha"
              required
            />
          </label>

          <label>
            Team Leader (Student ID/Name):
            <input
              type="text"
              value={leader}
              onChange={(e) => setLeader(e.target.value)}
              placeholder="e.g., Jay123"
              required
            />
          </label>

          <button type="submit">Create Group</button>
        </form>
      </Wrapper>
    </>
  );
};

export default CreateGroup;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;

  h2 {
    text-align: center;
    margin-bottom: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
  }

  input,
  select {
    padding: 10px;
    font-size: 16px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 20px;
    padding: 12px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: #0056b3;
  }
`;
