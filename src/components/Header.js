import React from 'react';

export default function Header(props) {
  return (
    <header className="cart-block row-cart center">
      <div>
        <a href="#/">
          <h1>Buy Insaurance</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}
