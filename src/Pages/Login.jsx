
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("kp-demo-user") || "null");

    if (!user || user.email !== email || user.password !== password) {
      setError("Account not found or password incorrect. Register a demo account first.");
      return;
    }

    localStorage.setItem("kp-demo-session", JSON.stringify({
      name: user.name,
      email: user.email
    }));

    navigate("/");
  }

  return (
    <section className="container section auth-section">
      <form className="form-card auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Customer Login</h1>
        <p>Sign in to your demo account.</p>

        <label>Email Address</label>
        <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input className="field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {error && <p className="form-error">{error}</p>}

        <button className="btn btn-primary full-btn" type="submit">Login</button>
        <p className="auth-switch">Don't have an account? <Link to="/register">Register here</Link></p>
      </form>
    </section>
  );
}
