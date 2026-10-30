
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

export default function Cart() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (!cart.length) {
    return (
      <section className="container section empty-state">
        <h1>Your Cart Is Empty</h1>
        <p>Explore our products and add something you love.</p>
        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
      </section>
    );
  }

  return (
    <section className="container section page-section">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <Link to={`/products/${item.id}`}>{item.name}</Link>
                <p>NPR {item.price.toLocaleString("en-NP")}</p>

                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button
                    disabled={item.quantity >= item.stock}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name}`}
              >
                <FaTrash />
              </button>
            </article>
          ))}
        </div>

        <aside className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-line"><span>Subtotal</span><strong>NPR {cartTotal.toLocaleString("en-NP")}</strong></div>
          <div className="summary-line"><span>Delivery</span><span>Calculated at checkout</span></div>
          <div className="summary-line total-line"><span>Subtotal</span><strong>NPR {cartTotal.toLocaleString("en-NP")}</strong></div>
          <Link to="/checkout" className="btn btn-primary full-btn">Proceed to Checkout</Link>
          <Link to="/products" className="text-link">Continue Shopping</Link>
        </aside>
      </div>
    </section>
  );
}
