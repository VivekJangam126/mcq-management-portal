import React, { useState } from "react";
import styled from "styled-components";

const AddMcq = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({ A: "", B: "", C: "", D: "" });
  const [correct, setCorrect] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions({ ...options, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMcq = {
      question,
      options,
      correct,
    };
    console.log("Submitted MCQ:", newMcq);

    // reset form
    setQuestion("");
    setOptions({ A: "", B: "", C: "", D: "" });
    setCorrect("");
  };

  return (
    <Wrapper>
      <div className="container">
        <h2>Add New MCQ</h2>
        <form onSubmit={handleSubmit}>
          <label>Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />

          {["A ", "B ", "C ", "D "].map((key) => (
            <div key={key}>
              <label>Option {key}</label>
              <input
                type="text"
                name={key}
                value={options[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <label>Correct Option</label>
          <select
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>

          <button type="submit">Submit MCQ</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddMcq;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 20px 40px 20px; /* TOP padding adjusted here */
  font-family: "Poppins", sans-serif;

  .container {
    width: 100%;
    max-width: 600px;
    background: #fdfdfd;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    font-weight: 500;
    color: #444;
  }

  input,
  select {
    padding: 10px;
    border: 1.5px solid #aaa;
    border-radius: 6px;
    font-size: 14px;
  }

  button {
    padding: 12px;
    border: none;
    background: black;
    color: white;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #222;
    }
  }
`;
