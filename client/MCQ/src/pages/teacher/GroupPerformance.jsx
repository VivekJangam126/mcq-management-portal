// src/pages/teacher/GroupPerformance.jsx
import React, { useState } from "react";
import styled from "styled-components";
import TeacherNavbar from "../../components/TeacherNavbar";

const dummyData = [
  {
    groupName: "Group 1",
    subject: "Data Structures",
    division: "A",
    leader: "Rahul Sharma",
    avgScore: 84,
  },
  {
    groupName: "Group 2",
    subject: "Operating Systems",
    division: "B",
    leader: "Sneha Patel",
    avgScore: 77,
  },
  {
    groupName: "Group 3",
    subject: "Networks",
    division: "A",
    leader: "Amit Kumar",
    avgScore: 91,
  },
];

const GroupPerformance = () => {
  const [division, setDivision] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleFilter = () => {
    if (division) {
      const filtered = dummyData.filter((item) => item.division === division);
      setFilteredData(filtered);
    } else {
      setFilteredData(dummyData);
    }
  };

  return (
    <>
      <TeacherNavbar />
      <Wrapper>
        <h2>Group Performance</h2>

        <div className="filter-box">
          <label>
            Filter by Division:
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
            >
              <option value="">All</option>
              <option value="A">Division A</option>
              <option value="B">Division B</option>
            </select>
          </label>
          <button onClick={handleFilter}>Apply</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Subject</th>
              <th>Division</th>
              <th>Leader</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((group, index) => (
              <tr key={index}>
                <td>{group.groupName}</td>
                <td>{group.subject}</td>
                <td>{group.division}</td>
                <td>{group.leader}</td>
                <td>{group.avgScore}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};

export default GroupPerformance;

const Wrapper = styled.div`
  padding: 40px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .filter-box {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;

    label {
      font-weight: 500;
    }

    select {
      padding: 8px;
      margin-left: 8px;
    }

    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    th,
    td {
      padding: 15px;
      border: 1px solid #ddd;
      text-align: center;
    }

    th {
      background-color: #f4f4f4;
    }
  }
`;
