import React from "react";
import styled from "styled-components";

const dummyMCQs = [
  {
    id: 1,
    question: "What is the capital of France?",
    correct: "B",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    correct: "A",
  },
];

const MyMcq = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>My Submitted MCQs</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Correct</th>
            </tr>
          </thead>
          <tbody>
            {dummyMCQs.map((mcq) => (
              <tr key={mcq.id}>
                <td>{mcq.id}</td>
                <td>{mcq.question}</td>
                <td>{mcq.correct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default MyMcq;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;

  .container {
    width: 100%;
    max-width: 800px;
    background: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
    font-family: "Poppins", sans-serif;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #efefef;
    color: #444;
    font-weight: 600;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;
