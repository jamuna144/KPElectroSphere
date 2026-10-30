
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import products from "../Data/products.js";
import { useCart } from "../Context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart, toggleWishlist } = useCart();

  if (!product) {
    return (
      <section className="container section empty-state">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </section>
    );
  }

  return (
    <section className="container section details-layout">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">
        <span className="category-label">{product.category}</span>
        <h1>{product.name}</h1>
        <div className="rating"><FaStar /> {product.rating} / 5</div>
        <h2 className="details-price">
          NPR {product.price.toLocaleString("en-NP")}
        </h2>
        <p>{product.description}</p>
        <p>Availability: {product.stock > 0 ? "In stock" : "Out of stock"}</p>

        <div className="details-buttons">
          <button
            className="btn btn-primary"
            disabled={product.stock <= 0}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <button
            className="btn btn-outline"
            onClick={() => toggleWishlist(product)}
          >
            Add to Wishlist
          </button>
        </div>

        <p className="muted">Payment options are displayed during checkout.</p>
        <Link to="/products" className="text-link">← Continue Shopping</Link>
      </div>
    </section>
  );
}
