import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.module.css'

const ProductList = ({products}) => {
  return (
    <div className={styles.products_container}>
    {/* {JSON.stringify(products) != ''} */}
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
    {products.length == 0 &&
      <h1 className={styles.label}>Producto No Encontrado</h1>
    }
    </div>   
  )
}

export default ProductList