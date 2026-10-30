



import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("kp-cart")) || [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("kp-wishlist")) || [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("kp-orders")) || [];
    } catch {
      return [];
    }
  });

  // Automatically save cart, wishlist and orders
  useEffect(() => {
    localStorage.setItem("kp-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("kp-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("kp-orders", JSON.stringify(orders));
  }, [orders]);

  // Add product to cart
  // function addToCart(product) {
  //   setCart((previousCart) => {
  //     const existing = previousCart.find(
  //       (item) => item.id === product.id
  //     );

  //     if (existing) {
  //       return previousCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }

  //     return [...previousCart, { ...product, quantity: 1 }];
  //   });
  // }

  // Add product to cart
  function addToCart(product) {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);

    localStorage.setItem(
      "kp-cart",
      JSON.stringify(updatedCart)
    );

    console.log("Storage immediately after saving:", localStorage.getItem("kp-cart"));

    console.log("Saved cart:", updatedCart);
  }

  // Update quantity
  function updateQuantity(id, quantity) {
    if (quantity < 1) return;

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  // Remove product
  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  // Wishlist
  function toggleWishlist(product) {
    setWishlist((previousWishlist) => {
      const exists = previousWishlist.some(
        (item) => item.id === product.id
      );

      return exists
        ? previousWishlist.filter((item) => item.id !== product.id)
        : [...previousWishlist, product];
    });
  }

  // Place order
  function placeOrder(customer, paymentMethod) {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = {
      id: `KP${Date.now()}`,
      items: cart,
      customer,
      paymentMethod,
      total: subtotal + (subtotal >= 5000 ? 0 : 150),
      status: "Order placed",
      createdAt: new Date().toLocaleString(),
    };

    setOrders((previousOrders) => [order, ...previousOrders]);
    setCart([]);

    return order;
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    cart,
    cartCount,
    cartTotal,
    wishlist,
    orders,
    addToCart,
    updateQuantity,
    removeFromCart,
    toggleWishlist,
    placeOrder,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
