import React, { createContext, useContext } from 'react';

const cartContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default cartContext;
