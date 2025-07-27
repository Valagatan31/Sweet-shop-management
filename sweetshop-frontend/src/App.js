import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./authContext";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { CartProvider } from "./cartContext";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<h1>Welcome to Sweet Shop</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </Router>
      <Footer />
      </CartProvider>
    </AuthProvider>
  );
}
