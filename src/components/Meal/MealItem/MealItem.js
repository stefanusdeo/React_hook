import React, { useContext } from 'react';
import cartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
  const ctx = useContext(cartContext)
  const price = `$${props.price.toFixed(2)}`;

  const handleAmount = (val)=>{
    ctx.addItem({
      id:props.id,
      name:props.name,
      amount:val,
      price:props.price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={handleAmount} />
      </div>
    </li>
  );
}
