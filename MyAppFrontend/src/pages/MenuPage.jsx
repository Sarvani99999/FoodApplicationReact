import { useState } from "react";
import { Link } from "react-router-dom";
import dishes from "../data/dishes.json";

export default function MenuPage({ cart, onAdd }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const categories = [
    "ALL",
    "VEG",
    "NONVEG",
    "STARTERS",
    "SNACKS",
    "ICECREAMS",
    "MAINCOURSE",
  ];

  // Filtering logic
  const filtered = dishes.filter((dish) => {
    const matchCategory =
      selectedCategory === "ALL" || dish.mealType === selectedCategory;
    const matchSearch = dish.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div
      className="menu-page"
      style={{
        maxWidth: "800px", // keeps it centered like before
        margin: "0 auto", // center horizontally
        padding: "20px",
        backgroundColor: "rgba(255,255,255,0.9)", // keeps card white
        borderRadius: "12px",
      }}
    >
      {/* 🔝 Top Bar */}
      <div
        className="top-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ margin: 0 }}>🍴 Food Court</h2>
        <Link to="/cart" style={{ fontSize: "22px", textDecoration: "none" }}>
          🛒 {cart.length}
        </Link>
      </div>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search for dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginBottom: "16px",
        }}
      />

      {/* 🔘 Category Buttons */}
      <div
        className="tabs"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: selectedCategory === cat ? "#ff5722" : "#eee",
              color: selectedCategory === cat ? "#fff" : "#333",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🍲 Dish Cards */}
      <div className="dish-list">
        {filtered.length === 0 ? (
          <p>No dishes found.</p>
        ) : (
          filtered.map((dish) => (
            <div
              key={dish.id}
              className="card"
              style={{
                display: "flex",
                gap: "16px",
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "16px",
                alignItems: "center",
              }}
            >
              <img
                src={dish.image}
                alt={dish.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <p>
                  <strong>₹{dish.price}</strong>
                </p>
                <button
                  onClick={() => onAdd(dish.id)}
                  style={{
                    background: "#ff9800",
                    color: "#fff",
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
