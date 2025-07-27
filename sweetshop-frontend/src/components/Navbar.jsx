import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../cartContext";
import { AuthContext } from "../authContext";
import "./Navbar.css";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
      </div>

      <div className="nav-right">
        {user && (
          <>
            <span className="nav-username">👤 {user.username}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        )}

        <Link to="/cart" className="cart-link" title="Cart">
          <MdShoppingCart className="cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
