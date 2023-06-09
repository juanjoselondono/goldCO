import { useRouter } from 'next/router';
import Purchase from '@/components/Purchase/Purchase';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import styles from './id.module.css';
import getAllData from '@/firebase/firestore/getAllData';
import getData from '@/firebase/firestore/getData'
import Spinner from '@/components/Spinner/Spinner';

export async function getStaticPaths() {
  // Fetch the list of all product IDs from the Firebase Firestore
  const { result, error } = await getAllData('products');
  if (error) {
    console.log(error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
  
  const paths = result.docs.map((doc) => ({
    params: { id: doc.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await getData('products', id);

  if (!data.result) {
    return {
      notFound: true,
    };
  }

  const product = data.result.data();
  product.id = id
  return { props: { product } };
}

const Product = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className={styles.spinner_container}>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {product && Object.keys(product).length !== 0 && (
        <>
          <div className={styles.content_container}>
            <ProductSlider images={product}></ProductSlider>
            <Purchase product={product}></Purchase>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

// import { useRouter } from 'next/router'
// import Purchase from '@/components/Purchase/Purchase'
// import ProductSlider from '@/components/ProductSlider/ProductSlider'
// import styles from './id.module.css'
// import getData from "@/firebase/firestore/getData";
// import Spinner from '@/components/Spinner/Spinner';
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   const data = await getData('products', id);

//   if (!data.result) {
//     return {
//       notFound: true,
//     };
//   }

//   const product = data.result.data();
//   return { props: { product } };
// }

// const Product = ({product}) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return  (
//       <div className={styles.spinner_container}>
//         <Spinner></Spinner>
//       </div>
//     );
//   }
//   return (
//       <div className={styles.container}>
//         { product != {} && JSON.stringify(product) != '' &&
//           <>
//             <div className={styles.content_container}>
//               <ProductSlider images = {product}></ProductSlider>
//               <Purchase product = {product}></Purchase>
//             </div>
//           </>
//          } 
//       </div>
//   )
// }

// export default Product;

