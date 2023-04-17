import Head from 'next/head'
import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import ProductList from '@/components/ProductList/ProductList'
import SearchBar from '@/components/SearchBar/SearchBar'
const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: '$10.99',
      image: 'https://via.placeholder.com/300x200.png?text=Product+1'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: '$12.99',
      image: 'https://via.placeholder.com/300x200.png?text=Product+2'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: '$14.99',
      image: 'https://via.placeholder.com/300x200.png?text=Product+3'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: '$12.99',
      image: 'https://via.placeholder.com/300x200.png?text=Product+4'
    },
    {
      id: 5,
      name: 'Banana',
      description:'very healthy fruit',
      price: '7.00',
      image: 'https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=2000'
    }
  ]
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

  const matchingRecommendations = recommendations.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  )


  return (
    <div >
      <SearchBar
        placeholder="Search for products"
        onSearch={handleSearch}
      />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default Home