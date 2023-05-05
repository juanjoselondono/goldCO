import { useRouter } from 'next/router'
import Purchase from '@/components/Purchase/Purchase'
import ProductSlider from '@/components/ProductSlider/ProductSlider'
import styles from './id.module.css'
import getData from "@/firebase/firestore/getData";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await getData('products', id);

  if (!data.result) {
    return {
      notFound: true,
    };
  }

  const product = data.result.data();
  return { props: { product } };
}


const Product = ({product}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading data...</div>;
  }
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