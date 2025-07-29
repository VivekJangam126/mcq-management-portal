import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <Heading>Welcome to Your Dashboard</Heading>
      <CardContainer>
        <Card>
          <CardTitle>MCQs Added</CardTitle>
          <CardValue>12</CardValue>
        </Card>
        <Card>
          <CardTitle>Pending Approvals</CardTitle>
          <CardValue>4</CardValue>
        </Card>
        <Card>
          <CardTitle>Total Solved</CardTitle>
          <CardValue>34</CardValue>
        </Card>
      </CardContainer>
    </Wrapper>
  );
};

export default Dashboard;

// Styled-components
const Wrapper = styled.div`
  padding: 40px;
  padding-top: 100px;
  min-height: 100vh;
  background-color: #f3f4f6; /* Tailwind gray-100 */
  font-family: "Poppins", sans-serif;
`;

const Heading = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  flex: 1 1 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.07);
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: #1f2937;
  margin-bottom: 10px;
`;

const CardValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #374151;
`;
