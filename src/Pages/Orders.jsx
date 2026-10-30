
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Orders() {
  const { orders } = useCart();
  const location = useLocation();
  const latestOrder = location.state?.order;

  return (
    <section className="container section page-section">
      {latestOrder && (
        <div className="success-message">
          <h2>Order placed successfully!</h2>
          <p>Your demo order number is <strong>{latestOrder.id}</strong>.</p>
          <p>Payment method: {latestOrder.paymentMethod}</p>
        </div>
      )}

      <h1>My Orders</h1>
      <p>Review orders placed in this browser.</p>

      {!orders.length ? (
        <div className="empty-state">
          <h3>No orders yet</h3>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <div className="order-heading">
                <div>
                  <strong>Order #{order.id}</strong>
                  <p>{order.createdAt}</p>
                </div>
                <span className="status-badge">{order.status}</span>
              </div>

              {order.items.map((item) => (
                <div className="summary-line" key={item.id}>
                  <span>{item.name} × {item.quantity}</span>
                  <span>NPR {(item.price * item.quantity).toLocaleString("en-NP")}</span>
                </div>
              ))}

              <hr />
              <div className="summary-line">
                <span>Payment: {order.paymentMethod}</span>
                <strong>NPR {order.total.toLocaleString("en-NP")}</strong>
              </div>

              <p>Delivery to: {order.customer.address}, {order.customer.city}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
