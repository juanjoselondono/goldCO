import React, {useContext, useState} from 'react'
import styles from './Purchase.module.css'
import { Button } from 'react-bootstrap'
import { CartContext } from "../../contexts/CartContext";
import Quantity from '../Quantity'
import { useRouter } from 'next/navigation';
const Purchase = ({product}) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { push } = useRouter();
  const triggerSale = ()=>{
    product.quantity = count;
    addToCart(product)
    push('/cart')
  }
  return (
    <>
        {
        product != undefined &&
            <div className={styles.purchase_container}>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
                <Quantity count = {count} setCount = {setCount}/>
                <div className={styles.stock_container}>
                  <h6>Stock Disponible: </h6>
                  {product.stock}
                </div>
                <Button className={styles.button} onClick={()=> triggerSale()}  variant="primary">Comprar ahora</Button>
                <Button className={styles.button} variant="outline-primary">Agregar al Carrito</Button>
                <div className={styles.purchase_description_container}>
                    <h5>Descripción:</h5>
                    <p>{product.description}</p>
                </div>
            </div>
        }
    </>
  )
}

export default Purchase