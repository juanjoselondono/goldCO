import Head from 'next/head'
import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import ProductList from '@/components/ProductList/ProductList'
import SearchBar from '@/components/SearchBar/SearchBar'
const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Gold Necklace',
      description: 'Stunning 14K gold necklace with a delicate chain.',
      price: '$349.99',
      image: 'https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/uGzrnEU6Idgnk9kIBpRfGE6qFandQP3ZebVonnRm.jpeg'
    },
    {
      id: 2,
      name: 'Gold Ring',
      description: 'Elegant 18K gold ring with a diamond accent.',
      price: '$499.99',
      image: 'https://staticimg.titan.co.in/Tanishq/Catalog/513218FOYAA00_1.jpg?impolicy=pqmed&imwidth=640'
    },
    {
      id: 3,
      name: 'Gold Watch',
      description: 'Luxurious 22K gold watch with a leather strap.',
      price: '$999.99',
      image: 'https://cdn.shopify.com/s/files/1/0878/3890/products/1053CH-TQ_2048x.jpg?v=1633100206'
    },
    {
      id: 4,
      name: 'Gold Earrings',
      description: 'Stylish 14K gold earrings with a unique design.',
      price: '$199.99',
      image: 'https://3.imimg.com/data3/VM/FC/MY-1757304/gold-silver-jewlry-lemon-500x500.jpg'
    },
    {
      id: 5,
      name: 'Gold Bracelet',
      description: 'Gorgeous 24K gold bracelet with a intricate pattern.',
      price: '$799.99',
      image: 'https://image.reliancejewels.com/Jewels/images/productImages/978/22-kt-gold-bracelet-large_c2b09d2ab30f3af9e1763f46e03b2a5a.jpg'
    }
  ];
  const [searchQuery, setSearchQuery] = useState('')
  const [recommendations, setRecommendations] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
    const matchingProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    const matchingNames = matchingProducts.map((product) => product.name)
    const uniqueNames = [...new Set(matchingNames)]
    setRecommendations(uniqueNames.slice(0, 4))
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )



  return (
    <div >
      <SearchBar
        placeholder={`Search for products`}
        onSearch={handleSearch}
      />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default Home