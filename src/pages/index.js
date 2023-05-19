import React, { useMemo } from 'react';
import ProductList from '@/components/ProductList/ProductList';
import SearchBar from '@/components/SearchBar/SearchBar';
import Spinner from '@/components/Spinner/Spinner';
import getAllData from '@/firebase/firestore/getAllData';
//TESTING SSR - NEW FEATURE
const Home = ({ products }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [recommendations, setRecommendations] = React.useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const matchingProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    const matchingNames = matchingProducts.map((product) => product.name);
    const uniqueNames = [...new Set(matchingNames)];
    setRecommendations(uniqueNames.slice(0, 4));
  };

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return (
    <div style={{ display: 'flex', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
      <SearchBar placeholder="Buscar Productos" onSearch={handleSearch} />
      {products && products.length !== 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const { result, error } = await getAllData('products');
  if (error) {
    console.log(error);
    return {
      props: {
        products: null,
      },
    };
  }
  const product_list = result.docs.map((doc) => {
    const json_data = doc.data();
    json_data.id = doc.id;
    return json_data;
  });
  return {
    props: {
      products: product_list,
    },
  };
}

export default Home;

// import React, { useEffect, useState, useMemo } from 'react'
// import ProductList from '@/components/ProductList/ProductList'
// import SearchBar from '@/components/SearchBar/SearchBar'
// import Spinner from '@/components/Spinner/Spinner';
// import getAllData from "@/firebase/firestore/getAllData";
// /*TESTING NEW FEATURE - SWR RENDERING*/
// const Home = () => {
//   const [products, setProducts] = useState([])
//   useEffect(()=>{
//     async function getData(){
//       var product_list = []
//       const { result, error } = await getAllData('products')
//       if (error) {
//         return console.log(error)
//       }
//       result.forEach((doc) => {
//         let json_data =  doc.data()
//         json_data['id'] = doc.id
//         console.log(json_data)
//         product_list.push(json_data)
//       });
//       setProducts(product_list)
//     }
//     getData()
//   }, [])

//   const [searchQuery, setSearchQuery] = useState('')
//   const [recommendations, setRecommendations] = useState([])

//   const handleSearch = (query) => {
//     setSearchQuery(query)
//     const matchingProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     )
//     const matchingNames = matchingProducts.map((product) => product.name)
//     const uniqueNames = [...new Set(matchingNames)]
//     setRecommendations(uniqueNames.slice(0, 4))
//   }

//   const filteredProducts = useMemo(() => (
//     products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   ), [products, searchQuery])

//   return (
//     <div style = {{display: 'flex',overflow:'hidden', flexDirection: 'column',  justifyContent:'center', alignContent:'center'}}>
//       <SearchBar
//         placeholder={`Buscar Productos`}
//         onSearch={handleSearch}
//       />
//       {
//         products.length != 0 &&
//         <ProductList products={filteredProducts} />
//       }
//       {
//        products.length == 0 &&
//         <Spinner></Spinner>
//       }
//     </div>
//   )
// }
// export default Home