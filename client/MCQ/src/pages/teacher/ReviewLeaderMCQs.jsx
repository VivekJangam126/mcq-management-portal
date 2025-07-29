// src/pages/teacher/ReviewLeaderMCQs.jsx
import React, { useState } from "react";
import styled from "styled-components";
import TeacherNavbar from "../../components/TeacherNavbar";

const dummyMCQs = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
    submittedBy: "Ravi Deshmukh",
    group: "Group 1",
    status: "Pending",
  },
  {
    id: 2,
    question: "Which protocol is used for secure communication?",
    options: ["HTTP", "FTP", "HTTPS", "TCP"],
    answer: "HTTPS",
    submittedBy: "Priya Nair",
    group: "Group 2",
    status: "Pending",
  },
];

const ReviewLeaderMCQs = () => {
  const [mcqs, setMcqs] = useState(dummyMCQs);
  const [comment, setComment] = useState("");

  const handleAction = (id, action) => {
    const updatedMcqs = mcqs.map((mcq) =>
      mcq.id === id ? { ...mcq, status: action } : mcq
    );
    setMcqs(updatedMcqs);
    setComment("");
  };

  return (
    <>
      <TeacherNavbar />
      <Wrapper>
        <h2>Review Leader Submitted MCQs</h2>

        {mcqs.map((mcq) => (
          <MCQCard key={mcq.id}>
            <div className="info">
              <h4>{mcq.question}</h4>
              <ul>
                {mcq.options.map((opt, idx) => (
                  <li key={idx}>{opt}</li>
                ))}
              </ul>
              <p>
                <strong>Correct Answer:</strong> {mcq.answer}
              </p>
              <p>
                <strong>Submitted by:</strong> {mcq.submittedBy} ({mcq.group})
              </p>
              <p>
                <strong>Status:</strong> {mcq.status}
              </p>
            </div>

            {mcq.status === "Pending" && (
              <div className="actions">
                <button onClick={() => handleAction(mcq.id, "Approved")}>
                  Approve
                </button>
                <button onClick={() => handleAction(mcq.id, "Rejected")}>
                  Reject
                </button>
                <div>
                  <input
                    type="text"
                    placeholder="Comment for resubmission..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      handleAction(mcq.id, "Resubmission Requested")
                    }
                  >
                    Request Resubmission
                  </button>
                </div>
              </div>
            )}
          </MCQCard>
        ))}
      </Wrapper>
    </>
  );
};

export default ReviewLeaderMCQs;

const Wrapper = styled.div`
  padding: 40px;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const MCQCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  h4 {
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 10px;
  }

  .actions {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    input {
      padding: 6px;
      width: 100%;
      margin-top: 6px;
    }
  }
`;
