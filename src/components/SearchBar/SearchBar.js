import React, { use, useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ placeholder, onSearch, recommendations }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchBar
