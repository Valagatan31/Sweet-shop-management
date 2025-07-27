import { useState } from "react";
import { Link } from "react-router-dom";   
import API from "../../api";
import './AuthForms.css';

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register/", {
        username: form.username.trim(),
        password: form.password
      });
      alert("Registered! Now you can login.");
      setForm({ username: "", password: "" }); 
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.error || " Registration failed.";
      alert(msg);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        value={form.username}
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        value={form.password}
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Register</button>

      
      <p className="redirect-text">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
}
