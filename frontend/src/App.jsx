import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const finalizePurchase = async () => {
    try {
      const response = await fetch("http://localhost:3001/finalizar-compra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });
      if (response.ok) {
        alert("Compra finalizada com sucesso!");
        setCart([]);
      } else {
        alert("Erro ao finalizar a compra");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>E-commerce</h1>
        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
          🛒 ({cart.length})
        </button>
      </header>

      <main>
        {showCart ? (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            finalizePurchase={finalizePurchase}
          />
        ) : (
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
