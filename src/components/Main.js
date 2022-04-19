import React from 'react';
import Cover from './Cover';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="cart-block cart-col-2">
      <h2>Covers</h2>
      <div className="row-cart">
        {products.map((product) => (
          <Cover key={product.id} product={product} onAdd={onAdd}></Cover>
        ))}
      </div>
    </main>
  );
}
