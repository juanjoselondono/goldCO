import React from 'react'
import styles from './ProductItem.module.css'
import { Inter } from 'next/font/google'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const ProductItem = ({ product }) => {
  return (
    <div className={`${styles.product} ${inter.className}`}>
      <h2 className={`${styles.product_name} ${inter.className}`}>{product.name}</h2>
      <img className={styles.product_image} src={product.image} alt={product.name} />
      <p className={styles.product_description}>{product.description}</p>
      <p className={styles.product_price}>Price: {product.price}</p>
      <button className={styles.product_button}>Add to cart</button>
    </div>
  )
}

export default ProductItem
