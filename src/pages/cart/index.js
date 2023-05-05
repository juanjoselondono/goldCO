import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from './cart.module.css'
const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    alert('deleted')
    clearCart();
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total +parseInt(item.price) * parseInt(item.quantity);
  }, 0);

  return (
    <div className={styles.container}>
      {cartItems.length > 0 ? (
        <>
        <div className={styles.label_title}>
            <h2>Shopping Cart</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
        </div>
          <h2></h2>
            {cartItems.map((item) => (
              <li className={styles.cart_item} key={item.id}>
                <img className={styles.cart_item_image} src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <div className={styles.cart_item_labels}>
                    <p className={styles.cart_item_labels_text}>Price: {item.price}</p>
                    <p className={styles.cart_item_labels_text}>Quantity: {item.quantity}</p>
                </div>
                <button className={styles.button_remove} onClick={() => handleRemoveItem(item)}>
                    Remove
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
              </li>
            ))}
          <p>Total: ${totalPrice}</p>
          <div className= {styles.button_container}>
            <button className={styles.button} onClick={()=>handleClearCart()}>Clear Cart</button>
            <button className={styles.button} onClick={() => console.log("Sale completed!")}>
                Complete Sale
            </button>
            <button className={styles.button} onClick={() => handleRemoveItem()}>
                Delete Cart
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;