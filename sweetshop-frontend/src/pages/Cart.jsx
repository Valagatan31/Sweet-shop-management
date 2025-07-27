import { useContext } from "react";
import { CartContext } from "../cartContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const totalBill = cartItems.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                {/* ✅ Show sweet image */}
                {item.image && (
                  <img
                    src={`http://127.0.0.1:8000${item.image}`}
                    alt={item.name}
                    className="cart-image"
                  />
                )}
                <span className="cart-name">{item.name}</span>
                <span className="cart-price">₹{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h2>Total Bill: ₹{totalBill.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}
