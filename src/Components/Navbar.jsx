
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa"
import { useCart } from "../Context/CartContext.jsx";

export default function Navbar() {
  const { cartCount, wishlist } = useCart();

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="brand">
          <span className="brand-icon">LP</span>
          <span>LP Electronics</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/wishlist" aria-label="Wishlist" className="nav-icon">
            <FaHeart />
            <span>{wishlist.length}</span>
          </Link>

          <Link to="/cart" aria-label="Shopping cart" className="nav-icon">
            <FaShoppingCart />
            <span>{cartCount}</span>
          </Link>

          <Link to="/login" aria-label="Customer account" className="nav-icon">
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
