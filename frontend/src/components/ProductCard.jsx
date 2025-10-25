import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar</button>
    </div>
  );
}

export default ProductCard;
