import { useRouter } from 'next/router'
import Purchase from '@/components/Purchase/Purchase'
import ProductSlider from '@/components/ProductSlider/ProductSlider'
import styles from './id.module.css'
import getData from "@/firebase/firestore/getData";
import { useEffect, useState } from 'react';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '*' } }
    ],
    fallback: true
  };
}
export async function getStaticProps(context) {
  const data = await getData('products', context.params.id);
  const product = data.result.data();
  return { props: { product } };
}


const Product = ({product}) => {
  return (
      <div className={styles.container}>
        { product != {} && JSON.stringify(product) != '' &&
          <>
            <div className={styles.content_container}>
              <ProductSlider images = {product}></ProductSlider>
              <Purchase product = {product}></Purchase>
            </div>
          </>
         } 
      </div>
  )
}

export default Product