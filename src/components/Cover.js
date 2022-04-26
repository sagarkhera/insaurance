import React from 'react';

const Cover = (props) => {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>₹{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} className='cartbtn'>Add To Cart</button>
        <br></br>
      </div>
    </div>
  );
}

export default Cover;