import React, { useEffect, useState } from "react";
import axios from "axios";

function VolunteerDashboard() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/volunteers/")
      .then(res => setVolunteers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Volunteer Dashboard</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", background: "white" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map(v => (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.skills}</td>
              <td>{v.is_available ? "Available" : "Busy"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VolunteerDashboard;
