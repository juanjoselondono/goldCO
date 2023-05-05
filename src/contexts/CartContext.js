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
  
    // Add the new product to the cart items array
    cartItems.push(product);
  
    // Store the updated cart items array in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(cartItems)
    // Update the cartItems state
    setCartItems(cartItems);
  };

  const removeFromCart = (product) => {
    // ...remove the product from the cartItems array...

    // Update the cartItems state
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };
  const clearCart = ()=>{
    alert('cart deleted')
    localStorage.removeItem('cartItems')
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};