import React from 'react'
import styles from './Purchase.module.css'
import { Button } from 'react-bootstrap'
import Quantity from './Quantity'
const Purchase = ({product}) => {
  return (
    <>
        {
        product != undefined &&
            <div className={styles.purchase_container}>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
                <Quantity/>
                <div className={styles.stock_container}>
                  <h6>Stock Disponible: </h6>
                  {product.stock}
                </div>
                <Button className={styles.button} variant="primary">Comprar ahora</Button>
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