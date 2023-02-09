import React from 'react'

const SearchBox = (props) => {
  const { handleInput, searchTerm} = props
  return (
    <div>
      <label>Search Recipes</label>
      <input value={searchTerm} onInput={handleInput} type="text" />
    </div>
  )
}

export default SearchBox