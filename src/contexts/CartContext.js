import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
   
  useEffect(() => {
    const asyncItems = localStorage.getItem("cartItems");
    if (asyncItems) {
      setCartItems(JSON.parse(asyncItems));
      console.log(JSON.parse(asyncItems))
    }
  }, []);

  const addToCart = (product) => {
    const asyncItems = localStorage.getItem('cartItems');
    let cartItems = [];
  
    if (asyncItems !== null) {
      // If cart items exist, parse the JSON string to an array of objects
      cartItems = JSON.parse(asyncItems);
    }
  
    let productFound = false;
  
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += product.quantity;
        console.log('repeated', item.quantity);
        productFound = true;
      }
    });
  
    if (!productFound) {
      cartItems.push(product);
    }
  
    // Store the updated cart items array in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Update the cartItems state
    setCartItems(cartItems);
  };
  
  const updateQuantity = (productId, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };
  
  const clearCart = ()=>{
    alert('cart deleted')
    localStorage.removeItem('cartItems')
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
};