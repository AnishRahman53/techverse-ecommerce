import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const fetchProducts = async () => {
  const res = await axios.get(
    "https://techverse-ecommerce.onrender.com/api/products"
  );

  setProducts(res.data);
};
  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#C99700",
        minHeight: "100vh",
        color: "#111111",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "5rem",
          letterSpacing: "6px",
          marginBottom: "20px",
          color: "#00897B",
          fontWeight: "900",
          WebkitTextStroke: "2px black",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        TECHVERSE
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        🛒 Cart Items: {cartCount}
      </p>

      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "320px",
            borderRadius: "10px",
            border: "2px solid #111111",
            backgroundColor: "#FFF8DC",
            color: "#111111",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        />
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Total Products: {filteredProducts.length}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            style={{
              backgroundColor: "#FFE8A3",
              borderRadius: "15px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>₹ {product.price}</h3>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

            <p
              style={{
                color: "#555",
                fontSize: "12px",
              }}
            >
              Product ID: {product._id.slice(-6)}
            </p>

            <button
              onClick={addToCart}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#111111",
                color: "#FFD700",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          padding: "20px",
          fontWeight: "bold",
          color: "#111111",
        }}
      >
        © 2026 TECHVERSE | React • Node.js • MongoDB Atlas
      </div>
    </div>
  );
}

export default Home;
