import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
