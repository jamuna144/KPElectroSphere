
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem("kp-demo-user", JSON.stringify({
      name: form.name,
      email: form.email,
      password: form.password
    }));

    navigate("/login");
  }

  return (
    <section className="container section auth-section">
      <form className="form-card auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">JOIN KP ELECTRONICS</span>
        <h1>Create Account</h1>
        <p>Create a demo customer account to try the interface.</p>

        <label>Full Name</label>
        <input className="field" name="name" value={form.name} onChange={handleChange} required />

        <label>Email Address</label>
        <input className="field" type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Password</label>
        <input className="field" type="password" name="password" value={form.password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input className="field" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />

        {error && <p className="form-error">{error}</p>}

        <button className="btn btn-primary full-btn" type="submit">Create Account</button>
        <p className="auth-switch">Already registered? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
}
