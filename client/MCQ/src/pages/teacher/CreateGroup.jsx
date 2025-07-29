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
    alert("Group created and leader assigned!");
  };

  return (
    <>
      <TeacherNavbar />
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <p>
            Create a Group <span>and assign a leader below</span>
          </p>

          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            required
          >
            <option value="">Select Division</option>
            <option value="A">Division A</option>
            <option value="B">Division B</option>
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Select Subject</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
          </select>

          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group Name"
            required
          />

          <input
            type="text"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
            placeholder="Team Leader (ID/Name)"
            required
          />

          <button className="continueBtn" type="submit">
            Create Group
          </button>
        </form>
      </Wrapper>
    </>
  );
};

export default CreateGroup;

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
`;
