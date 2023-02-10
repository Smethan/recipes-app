import React from 'react'
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, searchTerm} = props
  return (
    <div className="search-box-container">
      <div className="search-box">
      <label>Search Recipes: </label>
      <input placeholder="Search Recipes..." value={searchTerm} onInput={handleInput} type="text" />
      </div>
    </div>
  )
}

export default SearchBox