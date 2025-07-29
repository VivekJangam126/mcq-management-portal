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
    alert("Subject created successfully!");
    setDivision("");
    setSubject("");
  };

  return (
    <>
      <TeacherNavbar />
      <Wrapper>
        <div className="form">
          <p>
            Create a New Subject <br />
            <span>Select division and enter subject name</span>
          </p>
          <form onSubmit={handleSubmit}>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              required
            >
              <option value="">-- Select Division --</option>
              <option value="N3">Division N3</option>
              <option value="G3">Division G3</option>
              <option value="H3">Division H3</option>
            </select>

            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Data Structures"
              required
            />

            <button type="submit" className="continueBtn">
              Create Subject
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default CreateSubject;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f7f7f7;

  .form {
    background: #e4e4e4;
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  span {
    font-size: 0.9rem;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }

  .continueBtn {
    background-color: #202020;
    color: white;
    width: 100%;
    padding: 0.6rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  .continueBtn:hover {
    background-color: #000;
  }
`;
