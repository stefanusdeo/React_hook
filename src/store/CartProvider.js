import React, { useReducer } from 'react';
import cartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmoun: 0,
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD_CART'){
    const updateItem = state.items.concat(action.item)
    const newTotal = state.totalAmount + action.item.price*action.item.amount
    return {
      items: updateItem,
      totalAmount:newTotal,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({type:'ADD_CART', item:item})
  };

  const removeItem = (id) => {
    dispatchEvent({type:'REMOVE_CART', id:id})
  };

  const cartContexts = {
    item: cartState.items,
    totalAmount: cartState.totalAmoun,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <cartContext.Provider value={cartContexts}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
