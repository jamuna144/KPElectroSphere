// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar.jsx";
// import Footer from "./Components/Footer.jsx";

// import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
// import Products from "./Pages/Products.jsx";
// import ProductDetails from "./Pages/ProductDetails.jsx";
// import Cart from "./Pages/Cart.jsx";
// import Checkout from "./Pages/Checkout.jsx";
// import Login from "./Pages/Login.jsx";
// import Register from "./Pages/Register.jsx";
// import Orders from "./Pages/Orders.jsx";
// import Wishlist from "./Pages/Wishlist.jsx";
// import Contact from "./Pages/Contact.jsx";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:id" element={<ProductDetails />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/wishlist" element={<Wishlist />} />
//           <Route path="/contact" element={<Contact />} />

//           <Route
//             path="*"
//             element={
//               <div className="container section empty-state">
//                 <h1>404 - Page Not Found</h1>
//                 <a href="/" className="btn btn-primary">
//                   Back to Home
//                 </a>
//               </div>
//             }
//           />
//         </Routes>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;



import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Products from "./Pages/Products.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Orders from "./Pages/Orders.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import Contact from "./Pages/Contact.jsx";

import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

function App() {
  const location = useLocation();

  // Hide the customer navbar and footer on admin pages
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <main>
        <Routes>
          {/* Customer Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Pages */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="container section empty-state">
                <h1>404 - Page Not Found</h1>
                <a href="/" className="btn btn-primary">
                  Back to Home
                </a>
              </div>
            }
          />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
