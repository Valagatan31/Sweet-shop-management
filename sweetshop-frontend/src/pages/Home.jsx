import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../cartContext";
import "./Home.css";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const [sweets, setSweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch sweets from backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/sweets/")
      .then((response) => {
        console.log(" API DATA:", response.data);
        setSweets(response.data);
      })
      .catch((error) => {
        console.error(" Error fetching sweets:", error);
      });
  }, []);

  //  Add to cart (local only)
  const handleAddToCart = (sweetId) => {
    const sweet = sweets.find((s) => s.id === sweetId);
    if (!sweet || sweet.stock === 0) return;

    addToCart(sweet);

    const updated = sweets.map((s) =>
      s.id === sweetId ? { ...s, stock: s.stock - 1 } : s
    );
    setSweets(updated);


  };

  // Filter sweets
  const filteredSweets = sweets.filter((sweet) => {
    const matchesName = sweet.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || sweet.category === selectedCategory;
    return matchesName && matchesCategory;
  });

  const categories = ["All", ...new Set(sweets.map((s) => s.category))];

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>🍬 Welcome to Sweet Shop</h1>
        <p>Pick your favorite sweets and add them to your cart!</p>
      </header>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search sweets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="sweet-grid">
        {filteredSweets.map((sweet) => (
          <div key={sweet.id} className="sweet-item">
            {/* direct use backend URL */}
            {sweet.image && (
              <img
                src={sweet.image}
                alt={sweet.name}
                className="sweet-image"
              />
            )}
            <h3 className="sweet-name">{sweet.name}</h3>
            <p>Category: {sweet.category}</p>
            <p>Price: ₹{sweet.price}</p>
            <p className={sweet.stock === 0 ? "out-of-stock" : ""}>
              Stock: {sweet.stock === 0 ? "Out of Stock" : sweet.stock}
            </p>
            <button
              disabled={sweet.stock === 0}
              onClick={() => handleAddToCart(sweet.id)}
            >
              {sweet.stock === 0 ? "Unavailable" : "Add to Cart"}
            </button>
          </div>
        ))}

        {filteredSweets.length === 0 && (
          <p className="no-results">No sweets found.</p>
        )}
      </div>
    </div>
  );
}
