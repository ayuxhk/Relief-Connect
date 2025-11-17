import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HelpRequestForm from "./components/HelpRequestForm";
import VolunteerDashboard from "./components/VolunteerDashboard";
import AdminReport from "./components/AdminReport";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <h1>Relief Connect</h1>
          <ul>
            <li><Link to="/">Help Request</Link></li>
            <li><Link to="/volunteers">Volunteer Dashboard</Link></li>
            <li><Link to="/report">Admin Report</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HelpRequestForm />} />
          <Route path="/volunteers" element={<VolunteerDashboard />} />
          <Route path="/report" element={<AdminReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
