
import { Link } from "react-router-dom";
import { FaTruck, FaShieldAlt, FaHeadset } from "react-icons/fa";
import products from "../Data/products.js";
import ProductCard from "../Components/ProductCard";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-copy">
                        <span className="eyebrow">WELCOME TO KP ELECTRONICS</span>
                        <h1>Technology That Fits Your Life.</h1>
                        <p>
                            Discover electronics, smart accessories and everyday
                            technology at prices you'll love.
                        </p>
                        <Link to="/products" className="btn btn-primary">
                            Explore Products
                        </Link>
                        <p className="hero-note">Convenient shopping · NPR pricing · Easy ordering</p>
                    </div>

                    <div className="hero-image">
                        {/* <img
                            // src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000"
                            src="WhatsApp Image 2024-06-05 at 12.30.47 PM.jpeg"
                            alt="Electronics and technology products"
                        /> */}
                        <img
                            src="/Images/electronics.jpeg"
                            alt="Electronics and technology products"
                        />
                    </div>
                </div>
            </section>

            <section className="benefits container">
                <div><FaTruck /><span><strong>Easy Delivery</strong><small>Delivery options at checkout</small></span></div>
                <div><FaShieldAlt /><span><strong>Secure Checkout</strong><small>Clear payment options</small></span></div>
                <div><FaHeadset /><span><strong>Customer Support</strong><small>We're here to help</small></span></div>
            </section>

            <section className="section container">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow collection-label">OUR COLLECTION</span>
                        <h2>Featured Products</h2>
                        <p>Find the right technology for your everyday needs.</p>
                    </div>
                    <Link to="/products" className="text-link">View All Products →</Link>
                </div>

                <div className="product-grid">
                    {products.slice(0, 8).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section className="promo-section container">
                <div>
                    <span className="eyebrow">SMART SHOPPING STARTS HERE</span>
                    <h2>Your next favourite gadget is waiting.</h2>
                    {/* <p className="collection-description">
                        Find the right technology for your everyday needs.
                    </p> */}
                    <p className="featured-description">
                        Find the right technology for your everyday needs.
                    </p>
                    <Link to="/products" className="btn btn-light">Shop Now</Link>
                </div>
            </section>
        </>
    );
}
