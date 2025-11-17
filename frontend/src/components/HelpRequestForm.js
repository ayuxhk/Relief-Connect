import React, { useState } from "react";
import axios from "axios";

function HelpRequestForm() {
  const [formData, setFormData] = useState({
    requester_name: "",
    description: "",
    location: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/help/", formData);
    alert("Help request submitted successfully!");
    setFormData({ requester_name: "", description: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Help Request</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.requester_name}
        onChange={(e) => setFormData({ ...formData, requester_name: e.target.value })}
        required
      />
      <textarea
        placeholder="Describe your situation"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default HelpRequestForm;
