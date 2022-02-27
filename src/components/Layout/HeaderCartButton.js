import React, { useContext } from 'react';
import cartContext from '../../store/cart-context';
// icon
import CartIcon from '../Cart/CartIcon';
// css
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const ctx = useContext(cartContext);

  const allCartItem = ctx.item.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{allCartItem}</span>
    </button>
  );
}
