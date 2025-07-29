import React from "react";
import styled from "styled-components";
import LeaderNavbar from "../../components/Leader/LeaderNavbar";

const members = [
  { id: 1, name: "Amit Patil", email: "amit@gmail.com", status: "Active" },
  { id: 2, name: "Sneha Rao", email: "sneha@gmail.com", status: "Pending" },
  { id: 3, name: "Ravi Mehta", email: "ravi@gmail.com", status: "Active" },
];

const GroupMembers = () => {
  return (
    <>
      <LeaderNavbar />
      <Wrapper>
        <h1>👥 Group Members</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member.id}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td className={member.status.toLowerCase()}>{member.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};

export default GroupMembers;

// Styled Components
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

  .active {
    color: green;
    font-weight: 600;
  }

  .pending {
    color: orange;
    font-weight: 600;
  }
`;
