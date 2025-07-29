import React from "react";
import styled from "styled-components";
import LeaderNavbar from "./LeaderNavbar";

const mcqs = [
  {
    id: 1,
    question: "What is the full form of HTML?",
    submittedBy: "Amit Patil",
    status: "Pending",
  },
  {
    id: 2,
    question: "Which keyword is used to create a constant in C++?",
    submittedBy: "Sneha Rao",
    status: "Approved",
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    submittedBy: "Ravi Mehta",
    status: "Rejected",
  },
];

const ReviewMCQs = () => {
  return (
    <>
      <LeaderNavbar />
      <Wrapper>
        <h1>📝 Review MCQs</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Submitted By</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mcqs.map((mcq, index) => (
              <tr key={mcq.id}>
                <td>{index + 1}</td>
                <td>{mcq.question}</td>
                <td>{mcq.submittedBy}</td>
                <td className={mcq.status.toLowerCase()}>{mcq.status}</td>
                <td className="actions">
                  <button className="approve">Approve</button>
                  <button className="reject">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};

export default ReviewMCQs;

const Wrapper = styled.div`
  padding: 40px;
  background-color: #f3f4f6;
  min-height: 90vh;
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 24px;
    color: #1f2937;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    overflow: hidden;
  }

  th,
  td {
    padding: 16px;
    text-align: left;
    font-size: 16px;
  }

  thead {
    background-color: #e5e7eb;
  }

  tbody tr:nth-child(even) {
    background-color: #f9fafb;
  }

  .approved {
    color: green;
    font-weight: 600;
  }

  .rejected {
    color: red;
    font-weight: 600;
  }

  .pending {
    color: orange;
    font-weight: 600;
  }

  .actions button {
    margin-right: 10px;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  .approve {
    background-color: #10b981;
    color: white;
  }

  .reject {
    background-color: #ef4444;
    color: white;
  }
`;
