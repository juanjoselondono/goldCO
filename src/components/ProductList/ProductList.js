import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.module.css'

const ProductList = ({products}) => {
  return (
    <div className={styles.products_container}>
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
    {products.length == 0 &&
      <h1>Not found</h1>
    }
    </div>   
  )
}

export default ProductList