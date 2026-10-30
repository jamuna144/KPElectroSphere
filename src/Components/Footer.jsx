
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGooglePlay,
  FaApple
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Main Footer Sections */}
        <div className="footer-grid">

          {/* Company Information */}
          <div className="footer-column">
            <h3>KP Electronics</h3>

            <p>
              Your destination for electronics, accessories
              and everyday technology.
            </p>

            {/* <div className="social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="instagram-icon"
              >
                <FaInstagram />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link to="/products">All Products</Link>
            <Link to="/orders">My Orders</Link>
            <Link to="/wishlist">My Wishlist</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* Customer Service */}
          <div className="footer-column">
            <h4>Customer Service</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">My Account</Link>
            <Link to="/register">Create Account</Link>
            <p>Cash on Delivery available in supported areas.</p>
          </div>

          {/* Get in Touch */}
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <p><FaPhone /> Add your business phone</p>
            <p><FaEnvelope /> Add your business email</p>
            <p><FaMapMarkerAlt /> Nepal</p>
          </div>

        </div>

        {/* Additional Footer Sections */}
        <div className="footer-extra">

          {/* Download App */}
          <div className="footer-extra-column">
            <h4>Download Our App</h4>

            <p>
              Shop your favourite electronics anytime,
              anywhere.
            </p>

            <div className="app-download-item">
              <FaGooglePlay />
              <span>
                <small>Coming soon on</small>
                <strong>Google Play</strong>
              </span>
            </div>

            <div className="app-download-item">
              <FaApple />
              <span>
                <small>Coming soon on</small>
                <strong>App Store</strong>
              </span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="footer-extra-column payment-column">
            <h4>The Easiest Way to Pay</h4>

            <div className="payment-methods">
              <a href="https://cgpay.com.np/" target="_blank" rel="noreferrer">
                CGPay
              </a>

              <a href="https://www.nabilbank.com/" target="_blank" rel="noreferrer">
                Visa / Nabil Card
              </a>

              <a href="https://www.connectips.com/" target="_blank" rel="noreferrer">
                Connect IPS
              </a>

              <span>Cash on Delivery</span>

              <a href="https://esewa.com.np/" target="_blank" rel="noreferrer">
                eSewa
              </a>

              <span>FonePay</span>

              <a href="https://www.nabilbank.com/" target="_blank" rel="noreferrer">
                NBank by Nabil
              </a>

              <a href="https://khalti.com/" target="_blank" rel="noreferrer">
                Khalti
              </a>
            </div>
          </div>

          {/* CG Digital */}
          <div className="footer-extra-column cg-column">
            <h4>CG Digital</h4>

            <a
              href="https://www.cgdigital.com.np/user/login/"
              target="_blank"
              rel="noreferrer"
            >
              CG Digital Customer Login
            </a>

            <a
              href="https://www.cgdigital.com.np/"
              target="_blank"
              rel="noreferrer"
            >
              Visit CG Digital
            </a>

            <img
              src="https://cgdigital.com.np/api/img/logo.png"
              alt="CG Digital Logo"
              className="cg-logo"
            />

            <img
              src="https://cgdigital.com.np/_next/static/media/qr_code.140e956f.png"
              alt="CG Digital QR Code"
              className="cg-qr"
            />
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} KP Electronics. All rights reserved.
      </div>

    </footer>
  );
}
