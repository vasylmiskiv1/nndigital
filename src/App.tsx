import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import { useTypedSelector } from "./redux/store/initialState";

function App() {
  const isAuthoModal = useTypedSelector((state: any) => state.estore.isAuthoModal);
  
  return (
    <div className="h-screen flex flex-col">
      <Router>
        <Header />
        {isAuthoModal && <AuthModal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
