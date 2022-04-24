import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems?.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <aside className="cart-block cart-col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="cart-col-2">{item.name}</div>
            <div className="cart-col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="cart-col-2 text-right">
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row-cart">
              <div className="cart-col-2">Items Price</div>
              <div className="cart-col-1 text-right">₹{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row-cart">
              <div className="cart-col-2">Tax Price</div>
              <div className="cart-col-1 text-right">₹{taxPrice.toFixed(2)}</div>
            </div>

            <div className="row-cart">
              <div className="cart-col-2">
                <strong>Total Price</strong>
              </div>
              <div className="cart-col-1 text-right">
                <strong>₹{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row-cart">
              <button onClick={() => handleShow()}>
                Checkout
              </button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Complete your purchase</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row-cart">
                  <div className="cart-col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="cart-col-1 text-right">
                    <strong>₹{totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Pay Securely
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </div>
    </aside>
  );
}

export default Cart;