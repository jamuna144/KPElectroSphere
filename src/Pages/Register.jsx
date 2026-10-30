
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [error, setError] = useState("");

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setError("");

//     if (form.password.length < 6) {
//       setError("Password must contain at least 6 characters.");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     localStorage.setItem(
//       "kp-demo-user",
//       JSON.stringify({
//         name: name,
//         email: email,
//         password: password
//       })
//     );

//     navigate("/login");
//   }

//   return (
//     <section className="container section auth-section">
//       <form className="form-card auth-card" onSubmit={handleSubmit}>
//         <span className="eyebrow">JOIN KP ELECTRONICS</span>
//         <h1>Create Account</h1>
//         <p>Create a demo customer account to try the interface.</p>

//         <label>Full Name</label>
//         <input className="field" name="name" value={form.name} onChange={handleChange} required />

//         <label>Email Address</label>
//         <input className="field" type="email" name="email" value={form.email} onChange={handleChange} required />

//         <label>Password</label>
//         <input className="field" type="password" name="password" value={form.password} onChange={handleChange} required />

//         <label>Confirm Password</label>
//         <input className="field" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />

//         {error && <p className="form-error">{error}</p>}

//         <button className="btn btn-primary full-btn" type="submit">Create Account</button>
//         <p className="auth-switch">Already registered? <Link to="/login">Login</Link></p>
//       </form>
//     </section>
//   );
// }



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
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
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

    // Check whether the email is already registered
    const existingUser = JSON.parse(
      localStorage.getItem("kp-demo-user") || "null"
    );

    if (
      existingUser &&
      existingUser.email.toLowerCase() === form.email.trim().toLowerCase()
    ) {
      setError("This email is already registered. Please login.");
      return;
    }

    // Save customer information
    const newUser = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password
    };

    localStorage.setItem(
      "kp-demo-user",
      JSON.stringify(newUser)
    );

    alert("Account created successfully! Please login.");

    navigate("/login");
  }

  return (
    <section className="container section auth-section">

      <form className="form-card auth-card" onSubmit={handleSubmit}>

        <span className="eyebrow">JOIN KP ELECTRONICS</span>

        <h1>Create Account</h1>

        <p>Create your customer account and start shopping.</p>

        <label>Full Name</label>
        <input
          className="field"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          className="field"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          className="field"
          type="password"
          name="password"
          placeholder="Create a password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          className="field"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {error && (
          <p className="form-error">{error}</p>
        )}

        <button
          className="btn btn-primary full-btn"
          type="submit"
        >
          Create Account
        </button>

        <p className="auth-switch">
          Already registered?{" "}
          <Link to="/login">Login here</Link>
        </p>

      </form>
    </section>
  );
}