import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

// css
import classes from './MealItemForm.module.css';

export default function MealItemForm(props) {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();

    const enterAmount = amountRef.current.value;
    const enterNumber = +enterAmount;

    if (enterAmount.trim().length === 0 || enterNumber < 1 || enterNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
