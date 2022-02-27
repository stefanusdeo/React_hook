import React, { useContext } from 'react';
import cartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart(props) {
  const cartCtx = useContext(cartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.item.length > 0;

  const cartItemRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.item.map((val, index) => (
        <CartItem
          key={index}
          name={val.name}
          amount={val.amount}
          price={val.price}
          onRemove={cartItemRemove.bind(null, val.id)}
          onAdd={cartItemAdd.bind(null, val)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
