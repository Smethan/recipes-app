import React, { useState } from 'react'

const AddRecipe = () => {
  const [ title, setTitle ] = useState("")
  const [ prepTime, setPrepTime ] = useState("")
  const [ cookTime, setCookTime ] = useState("")
  const [ servings, setServings ] = useState("")

  const handleTitle = ((e) => {
    setTitle(e.target.value)
  })
  const handlePrepTime = ((e) => {
    setPrepTime(e.target.value)
  })
  const handleCookTime = ((e) => {
    setCookTime(e.target.value)
  })
  const handleServings = ((e) => {
    setServings(e.target.value)
  })
  // const handleIngredients = ((e) => {
    // setIngredients(e.target.value)
  // })
  
  const handleFile = ((e) => {
    console.log(e.target)
  })

  const addRecipe = {
    title: title,
		prepTime: prepTime,
		cookTime: cookTime,
		servings: servings,
		image: "",
  };

  const postRecipe =() => {
    fetch("http://127.0.0.1:3010/api/recipes", {
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(addRecipe)
    })
  }

  const handleAddRecipe = (e) => {
    e.preventDefault()
    postRecipe()
  }
  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleAddRecipe}>
        <label> Recipe Title</label>
        <input type="text" required value={title} onChange={handleTitle} />
        <br />
        <label> Prep-Time</label>
        <input type="text" required value={prepTime} onChange={handlePrepTime} />
        <br />
        <label> Cook Time </label>
        <input type="text" required value={cookTime} onChange={handleCookTime} />
        <br />
        <label> Servings </label>
        <input type="text" required value={servings} onChange={handleServings} />
        <br />
        <label>Ingredients</label>
        {/* <input type="text" required value={ingredients} onChange={handleIngredients} /> */}
        <br />
        <input type="file"  onChange={handleFile} />
        <br />
        <button>Add Recipe</button>
      </form>
      
    </div>
  )
}

export default AddRecipe