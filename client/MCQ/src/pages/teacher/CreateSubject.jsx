// src/pages/teacher/CreateSubject.jsx
import React, { useState } from "react";
import styled from "styled-components";
import TeacherNavbar from "../../components/TeacherNavbar";

const CreateSubject = () => {
  const [division, setDivision] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!division || !subject) return alert("Please fill all fields");

    const newSubject = {
      division,
      subjectName: subject,
    };

    console.log("Subject Created:", newSubject);
    // TODO: Send this to backend or save in localStorage
    alert("Subject created successfully!");
    setDivision("");
    setSubject("");
  };

  return (
    <>
      <TeacherNavbar />
      <Wrapper>
        <h2>Create Subject</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Select Division:
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              required
            >
              <option value="">-- Select Division --</option>
              <option value="A">Division A</option>
              <option value="B">Division B</option>
            </select>
          </label>

          <label>
            Subject Name:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Data Structures"
              required
            />
          </label>

          <button type="submit">Create Subject</button>
        </form>
      </Wrapper>
    </>
  );
};

export default CreateSubject;

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
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: #218838;
  }
`;
