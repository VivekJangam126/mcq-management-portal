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
        <div className="form">
          <p>
            👥 Group Members <br />
            <span>List of students in your group</span>
          </p>
          <div className="tableContainer">
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
                    <td className={member.status.toLowerCase()}>
                      {member.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default GroupMembers;

// Styled Components
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
    max-width: 800px;
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

  .tableContainer {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 1rem;
  }

  th,
  td {
    padding: 0.8rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  thead {
    background-color: #dcdcdc;
  }

  tbody tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  .active {
    color: green;
    font-weight: bold;
  }

  .pending {
    color: orange;
    font-weight: bold;
  }
`;
