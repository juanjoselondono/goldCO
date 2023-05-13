import React, { useState } from 'react'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from './CartItem.module.css'
import Quantity from '../Quantity'
const CartItem = ({item}) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1)
  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };
  return (
    <li className={styles.cart_item} key={item.id}>
        <img className={styles.cart_item_image} src={item.image} alt={item.title} />
        <p className={styles.cart_item_title}>{item.title}</p>
        <div className={styles.cart_item_labels}>
            <p className={styles.cart_item_labels_text}>Price: {item.price}</p>
            <Quantity count={quantity} setCount= {setQuantity}></Quantity>
        </div>
        <button className={styles.button_remove} onClick={() => handleRemoveItem(item)}>
            Remove
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
    </li>
  )
}

export default CartItem