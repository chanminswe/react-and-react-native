import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [boughtItems , setBoughtItems] = useState([]);

  return (
    <CartContext.Provider value={{ amount, setAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
