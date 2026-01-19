import { useState } from "react";

const FormValidation = () => {

  // Single form object
  const [formInput, setInput] = useState({
    username: "",
    email: "",
    country: "",
    isChecked: false,
  });

  // Store submitted forms
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add formInput into the list
    setSubmittedData((prev) => [...prev, formInput]);

    // Clear inputs
    setInput({
      username: "",
      email: "",
      country: "",
      isChecked: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <h1>Form Validation</h1>

      <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formInput.username}
          onChange={handleInputChange}
        />

        <br />

        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formInput.email}
          onChange={handleInputChange}
        />

        <br />

        <label>Checkbox</label>
        <input
          type="checkbox"
          name="isChecked"
          checked={formInput.isChecked}
          onChange={handleInputChange}
        />

        <br />

        <label>Country</label>
        <select
          name="country"
          value={formInput.country}
          onChange={handleInputChange}
        >
          <option value="">Select Option</option>
          <option value="somalia">Somalia</option>
          <option value="kenya">Kenya</option>
          <option value="djibouti">Djibouti</option>
        </select>

        <br />

        <button type="submit">Submit</button>
      </form>

      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            <h2>username: {data.username}</h2>
            <h2>email: {data.email}</h2>
            <h2>country: {data.country}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormValidation;
