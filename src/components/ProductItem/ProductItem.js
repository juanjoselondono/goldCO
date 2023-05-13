import React from 'react'
import styles from './ProductItem.module.css'
import { Inter } from 'next/font/google'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react';
import Swal from 'sweetalert2'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const ProductItem = ({ product }) => {
  const router = useRouter();
  product.quantity = 1
  const { addToCart } = useContext(CartContext);
  const triggerCart = ()=>{
    addToCart(product)
    Swal.fire({
      title: 'Item agregado al carrito',
      text: "Proceder al checkout?",
      icon: 'success',
      showCancelButton: true,
      cancelButtonText:'Seguir comprando',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceder al checkout'
    })
    .then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        router.push("/cart");
      }
    })
  }
  return (
      <div className={`${styles.product} ${inter.className}`}>
        <Link  href={`product/${product.id}`} className={`${styles.product}`}>
          <h2 className={`${styles.product_name} ${inter.className}`}>{product.name}</h2>
          <img className={styles.product_image} src={product.image} alt={product.name} />
          <p className={styles.product_price}>Price: {product.price}</p>
          <p className={styles.product_description}>{product.description}</p>
        </Link>
        <button onClick={()=> triggerCart()} className={styles.product_button}>
            Añadir Al Carrito
            <svg  style = {{marginLeft: '5px'}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </button>
      </div>
  )
}

export default ProductItem
