import React from "react";

function Cart({ cart, removeFromCart, updateQuantity, finalizePurchase }) {
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
                min="1"
              />
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button onClick={finalizePurchase}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
}

export default Cart;
