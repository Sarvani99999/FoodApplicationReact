import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import dishes from "./data/dishes.json";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const dish = dishes.find((d) => d.id === id);
    setCart((prev) => [...prev, dish]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/menu"
        element={<MenuPage cart={cart} onAdd={addToCart} />}
      />
      <Route
        path="/cart"
        element={<CartPage cart={cart} onRemove={removeFromCart} />}
      />
    </Routes>
  );
}
