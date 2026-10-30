
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Checkout() {
  const { cart, cartTotal, placeOrder } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    payment: "Cash on Delivery"
  });

  const [error, setError] = useState("");

  const delivery = cartTotal >= 5000 ? 0 : 150;
  const total = cartTotal + delivery;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!cart.length) {
      setError("Your cart is empty.");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    if (form.payment === "Online Payment") {
      setError("Online payment is not connected yet. Choose Cash on Delivery for this demo.");
      return;
    }

    const order = placeOrder(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city
      },
      form.payment
    );

    navigate("/orders", { state: { order } });
  }

  if (!cart.length) {
    return (
      <section className="container section empty-state">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn btn-primary">Shop Products</Link>
      </section>
    );
  }

  return (
    <section className="container section page-section">
      <h1>Checkout</h1>

      <form className="checkout-layout" onSubmit={handleSubmit}>
        <div className="form-card">
          <h2>Delivery Information</h2>

          <label>Full Name</label>
          <input className="field" name="name" value={form.name} onChange={handleChange} required />

          <label>Email Address</label>
          <input className="field" type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Phone Number</label>
          <input className="field" name="phone" value={form.phone} onChange={handleChange} maxLength={10} required />

          <label>Delivery Address</label>
          <textarea className="field" name="address" value={form.address} onChange={handleChange} required rows={3} />

          <label>City</label>
          <input className="field" name="city" value={form.city} onChange={handleChange} required />

          <label>Payment Method</label>
          <select className="field" name="payment" value={form.payment} onChange={handleChange}>
            <option>Cash on Delivery</option>
            <option>Online Payment</option>
          </select>

          {error && <p className="form-error">{error}</p>}

          <button className="btn btn-primary full-btn" type="submit">
            Place Order · NPR {total.toLocaleString("en-NP")}
          </button>
        </div>

        <aside className="summary-card">
          <h2>Your Order</h2>
          {cart.map((item) => (
            <div className="summary-line" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <strong>NPR {(item.price * item.quantity).toLocaleString("en-NP")}</strong>
            </div>
          ))}
          <div className="summary-line"><span>Subtotal</span><span>NPR {cartTotal.toLocaleString("en-NP")}</span></div>
          <div className="summary-line"><span>Delivery</span><span>{delivery ? `NPR ${delivery}` : "Free"}</span></div>
          <div className="summary-line total-line"><strong>Total</strong><strong>NPR {total.toLocaleString("en-NP")}</strong></div>
        </aside>
      </form>
    </section>
  );
}
