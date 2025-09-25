import { Link } from "react-router-dom";

export default function CartPage({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="menu-page">
      {/* 🔝 Page Title */}
      <h2 style={{ marginBottom: "16px" }}>🛒 Your Cart</h2>

      {/* 🛒 Empty Cart */}
      {cart.length === 0 ? (
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "24px",
            textAlign: "center",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <img
            src="/sadimg1.jpeg"
            alt="Empty Cart"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginBottom: "12px",
            }}
          />
          <p style={{ color: "#666", marginBottom: "16px" }}>
            No items in your cart
          </p>
          <Link to="/menu">
            <button
              style={{
                background: "#ff5722",
                color: "#fff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Back to Menu
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* 🛍 Cart Items */}
          <div className="dish-list">
            {cart.map((item) => (
              <div
                key={item.id}
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
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>
                    <strong>₹{item.price}</strong>
                  </p>
                  <button
                    onClick={() => onRemove(item.id)}
                    style={{
                      background: "#e53935",
                      color: "#fff",
                      padding: "6px 12px",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 💰 Total Section */}
          <div
            style={{
              marginTop: "20px",
              background: "#fff",
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>Total: ₹{total}</h3>
            <Link to="/menu">
              <button
                style={{
                  background: "#4caf50",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Back to Menu
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
