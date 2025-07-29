import React from "react";
import styled from "styled-components";
import LeaderNavbar from "../../components/Leader/LeaderNavbar"; // Include Navbar to avoid repetition in App.jsx

const LeaderDashboard = () => {
  return (
    <>
      <LeaderNavbar />
      <Wrapper>
        <h1>📊 Leader Dashboard</h1>
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
            <p className="pending">Not Submitted</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default LeaderDashboard;

const Wrapper = styled.div`
  padding: 40px;
  background-color: #f3f4f6;
  min-height: 90vh;
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 24px;
    color: #1f2937;
    margin-bottom: 30px;
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
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    text-align: center;
  }

  .card h3 {
    font-size: 1.2rem;
    color: #34495e;
    margin-bottom: 1rem;
  }

  .card p {
    font-size: 1.6rem;
    color: #2c3e50;
    font-weight: bold;
  }

  .pending {
    color: orange;
  }
`;
