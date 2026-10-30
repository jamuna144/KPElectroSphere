
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../Context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useCart();

  const favorite = wishlist.some((item) => item.id === product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </Link>

        <button
          className={`wishlist-btn ${favorite ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
        >
          <FaHeart />
        </button>
      </div>

      <div className="product-info">
        <span className="category-label">{product.category}</span>
        <Link
          to={`/products/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="rating">
          <FaStar /> {product.rating}
        </div>

        <div className="price-row">
          <strong>NPR {product.price.toLocaleString("en-NP")}</strong>
          <del>NPR {product.oldPrice.toLocaleString("en-NP")}</del>
        </div>

        {/* <button
          className="btn btn-primary add-cart-btn"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart /> Add to Cart
        </button> */}

        <button
          type="button"
          className="btn btn-primary add-cart-btn"
          onClick={() => {
            console.log("Button clicked:", product.name);
            addToCart(product);
            alert(product.name + " added to cart!");
          }}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </article>
  );
}
