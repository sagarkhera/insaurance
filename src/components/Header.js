import React from 'react';

const Header = (props) => {
  return (
    <header className="cart-block row-cart center">
      <h1>Buy Insaurance</h1>
      <div>
        Cart{' '}
        {props.countCartItems ? (
          <button className="badge">{props.countCartItems}</button>
        ) : (
          ''
        )}
      </div>
    </header>
  );
}

export default Header;
