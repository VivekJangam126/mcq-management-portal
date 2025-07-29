import React from "react";
import styled from "styled-components";

const LeaderDashboard = () => {
  return (
    <Wrapper>
      <h2>Welcome, Team Leader</h2>
      <div className="stats">
        <div className="card">
          <h3>👥 Group Members</h3>
          <p>10</p>
        </div>
        <div className="card">
          <h3>📝 MCQs Submitted</h3>
          <p>45</p>
        </div>
        <div className="card">
          <h3>📤 Final Status</h3>
          <p>Not Submitted</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LeaderDashboard;

const Wrapper = styled.div`
  padding: 2rem;
  margin-top: 60px;

  h2 {
    font-family: "Orbitron", sans-serif;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .stats {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .card {
    flex: 1 1 250px;
    padding: 1.5rem;
    border-radius: 10px;
    background: #f3f3f3;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h3 {
      font-size: 1.2rem;
      color: #34495e;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      color: #2c3e50;
      font-weight: bold;
    }
  }
`;
