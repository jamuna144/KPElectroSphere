
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>KP Electronics</h3>
          <p>Your destination for electronics, accessories and everyday technology.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/products">All Products</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/wishlist">My Wishlist</Link>
        </div>

        <div>
          <h4>Customer Service</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">My Account</Link>
          <p>Cash on Delivery available in supported areas.</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p><FaPhone /> Add your business phone</p>
          <p><FaEnvelope /> Add your business email</p>
          <div className="social-links">
            <FaFacebook /> <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} KP Electronics. All rights reserved.
      </div>
    </footer>
  );
}
