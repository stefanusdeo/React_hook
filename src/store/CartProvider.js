import React, { useReducer } from 'react';
import cartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_CART') {
    const newTotal = state.totalAmount + action.item.price * action.item.amount;

    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartIndex];

    let updatedItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotal,
    };
  }

  if(action.type === 'REMOVE_CART'){
    const existingCartIndex = state.items.findIndex(item => item.id === action.id);
    
    const existingItem = state.items[existingCartIndex];
    const totalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1){
      updatedItems=state.items.filter(item => item.id !== action.id);
    }else{
      const updatedItem = {...existingItem, amount:existingItem.amount-1};
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    }

    return{
      items:updatedItems,
      totalAmount:totalAmount
    }
    
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({ type: 'ADD_CART', item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: 'REMOVE_CART', id: id });
  };

  const cartContexts = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
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
