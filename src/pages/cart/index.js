import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from './cart.module.css'
import CartItem from "@/components/CartItem/CartItem";
import ShippingForm from "@/components/ShippingForm/ShippingForm";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)
  const totalPrice = cartItems.reduce((total, item) => {
    var clean_price = item.price.replace('$', '')
    return parseFloat(total + (parseFloat(clean_price) * parseFloat(item.quantity))).toFixed(2);
  }, 0);
  return (
    <div className={styles.container}>
      {cartItems.length > 0 ? (
        <>
        <div className={styles.cart_container}>
          <section>
            <div className={styles.cart_list_container}>
              {cartItems.map((item) => (
                <CartItem key = {item.id +1} item = {item}></CartItem>
              ))}
            </div>
            <h2 className={styles.total_label}>Total: ${totalPrice}</h2>
          </section>
          <section>
            <ShippingForm></ShippingForm>
          </section>
        </div>
        </>
      ) : (
        <div className={styles.empty_cart_container}>
          <h4 className={styles.empty_cart_text}>Your cart is empty</h4>
          <button className={styles.empty_cart_button}> GO shop some items</button>
        </div>
      )}
    </div>
  );
};

export default Cart;