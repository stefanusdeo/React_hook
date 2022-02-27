import React, { useContext, useEffect, useState } from 'react';
import cartContext from '../../store/cart-context';
// icon
import CartIcon from '../Cart/CartIcon';
// css
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const ctx = useContext(cartContext);

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;

  const allCartItem = ctx.item.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  useEffect(() => {
    if (ctx.item.length === 0) {
      return;
    }
    setBtnHighlight(true);
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.item]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{allCartItem}</span>
    </button>
  );
}
