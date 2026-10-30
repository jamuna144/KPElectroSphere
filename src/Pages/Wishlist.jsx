
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import ProductCard from "../Components/ProductCard.jsx";

export default function Wishlist() {
  const { wishlist } = useCart();

  return (
    <section className="container section page-section">
      <h1>My Wishlist ❤️</h1>
      <p>Products you have saved for later.</p>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <h3>Your wishlist is empty</h3>
          <p>Add your favourite electronics to find them here.</p>
          <Link to="/products" className="btn btn-primary">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
