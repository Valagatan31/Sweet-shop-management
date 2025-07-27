import { useState, useContext } from "react";
import API from "../../api";
import { AuthContext } from "../../authContext";
import "./AuthForms.css";

export default function LoginForm() {
  const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login/", form); 
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user || { username: form.username }); 
      alert("Login successful!");
    } catch (err) {
      console.error(err);
      alert("Invalid username or password");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}
