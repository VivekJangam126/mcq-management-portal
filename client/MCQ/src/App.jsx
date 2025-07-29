import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeaderNavbar from "./pages/leader/LeaderNavbar";
import TeacherNavbar from "./components/TeacherNavbar";

import Dashboard from "./pages/student/Dashboard";
import AddMcq from "./pages/student/AddMcq";
import MyMcq from "./pages/student/MyMcq";

import ReviewMCQs from "./pages/leader/ReviewMcqs";

import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import CreateSubject from "./pages/teacher/CreateSubject";
import CreateGroup from "./pages/teacher/CreateGroup";
import GroupPerformance from "./pages/teacher/GroupPerformance";
import ReviewLeaderMCQs from "./pages/teacher/ReviewLeaderMCQs";

// Placeholder component
const ComingSoon = () => <h2>Coming Soon...</h2>;

import "./index.css";

function App() {
  const location = useLocation();
  const isLeaderRoute = location.pathname.startsWith("/leader");
  const isTeacherRoute = location.pathname.startsWith("/teacher");

  return (
    <>
      {/* Conditional Navbar */}
      {isLeaderRoute ? (
        <LeaderNavbar />
      ) : isTeacherRoute ? (
        <TeacherNavbar />
      ) : (
        <Navbar />
      )}

      <div style={{ display: "flex" }}>
        {/* Sidebar only for student */}
        {!isLeaderRoute && !isTeacherRoute && <Sidebar />}

        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            {/* Student Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/addmcq" element={<AddMcq />} />
            <Route path="/mymcq" element={<MyMcq />} />

            {/* Leader Routes */}
            <Route path="/leader/review-mcqs" element={<ReviewMCQs />} />

            {/* Teacher Routes */}
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/create-subject" element={<CreateSubject />} />
            <Route path="/teacher/create-group" element={<CreateGroup />} />
            <Route
              path="/teacher/group-performance"
              element={<GroupPerformance />}
            />
            <Route
              path="/teacher/review-leader-performance"
              element={<ComingSoon />}
            />
            <Route
              path="/teacher/review-leader-mcqs"
              element={<ReviewLeaderMCQs />}
            />
            <Route path="/teacher/dashboard-mcq" element={<ComingSoon />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
