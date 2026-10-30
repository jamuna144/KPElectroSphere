import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLaptop,
  FaHeadphones,
  FaShippingFast,
  FaShieldAlt,
  FaHeart,
  FaShoppingBag
} from 'react-icons/fa';

export default function About() {
  return (
    <div className="about-page">

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <span className="eyebrow">ABOUT KP ELECTRONICS</span>

          <h1>
            Technology That Makes
            <span> Life Better.</span>
          </h1>

          <p>
            Welcome to KP Electronics Store, your destination for
            quality electronics, useful gadgets, and modern technology
            at affordable prices.
          </p>

          <Link to="/products" className="btn btn-primary">
            <FaShoppingBag /> Explore Products
          </Link>
        </div>
      </section>

      {/* About Store Section */}
      <section className="container section about-intro">
        <div className="about-intro-image">
          <img
            src="/images/electronics.jpeg"
            alt="Electronics and technology products"
          />
        </div>

        <div className="about-intro-text">
          <span className="eyebrow">WHO WE ARE</span>

          <h2>Your Trusted Electronics Shopping Partner</h2>

          <p>
            At KP Electronics Store, we believe that choosing the
            right technology should be simple, convenient, and
            enjoyable. We aim to bring useful electronic products
            closer to our customers.
          </p>

          <p>
            From everyday accessories to essential electronic gadgets,
            our goal is to help you find products that suit your needs
            and budget.
          </p>

          <p>
            We are committed to providing a smooth shopping experience,
            clear product information, and convenient ordering options
            for customers across Nepal.
          </p>

          <Link to="/products" className="btn btn-primary">
            Shop Our Collection
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-features">
        <div className="container section">
          <div className="section-heading about-heading">
            <div>
              <span className="eyebrow">WHY CHOOSE US</span>
              <h2>A Better Way to Shop Electronics</h2>
              <p>
                Everything we do is focused on making your shopping
                experience easier and more convenient.
              </p>
            </div>
          </div>

          <div className="about-feature-grid">

            <div className="about-feature-card">
              <FaLaptop />
              <h3>Quality Products</h3>
              <p>
                Explore a range of electronic gadgets and accessories
                for your everyday needs.
              </p>
            </div>

            <div className="about-feature-card">
              <FaShippingFast />
              <h3>Convenient Shopping</h3>
              <p>
                Browse products online and place your order from
                the comfort of your home.
              </p>
            </div>

            <div className="about-feature-card">
              <FaShieldAlt />
              <h3>Secure Shopping</h3>
              <p>
                Enjoy a straightforward ordering experience with
                clear product and checkout information.
              </p>
            </div>

            <div className="about-feature-card">
              <FaHeadphones />
              <h3>Customer Support</h3>
              <p>
                We aim to help customers with their product questions
                and shopping concerns.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="container section about-commitment">
        <div className="about-commitment-content">
          <FaHeart className="about-heart-icon" />

          <span className="eyebrow">OUR COMMITMENT</span>

          <h2>Making Technology Accessible to Everyone</h2>

          <p>
            Our mission is to make electronics shopping accessible,
            convenient, and affordable. We want every customer to
            feel confident when choosing the technology that fits
            their lifestyle.
          </p>

          <Link to="/products" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      </section>

    </div>
  );
}