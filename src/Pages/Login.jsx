

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Get registered customer
    const user = JSON.parse(
      localStorage.getItem("kp-demo-user") || "null"
    );

    if (!user) {
      setError("No account found. Please register first.");
      return;
    }

    // Check email and password
    if (
      user.email.trim().toLowerCase() !== email.trim().toLowerCase() ||
      user.password !== password
    ) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    // Save login session
    localStorage.setItem(
      "kp-demo-session",
      JSON.stringify({
        name: user.name,
        email: user.email
      })
    );

    alert("Login successful! Welcome " + user.name);

    navigate("/");
  }

  return (
    <section className="container section auth-section">

      <form className="form-card auth-card" onSubmit={handleSubmit}>

        <span className="eyebrow">WELCOME BACK</span>

        <h1>Customer Login</h1>

        <p>Login to your KP Electronics account.</p>

        <label>Email Address</label>

        <input
          className="field"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>

        <input
          className="field"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="form-error">{error}</p>
        )}

        <button
          className="btn btn-primary full-btn"
          type="submit"
        >
          Login
        </button>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>

      </form>
    </section>
  );
}