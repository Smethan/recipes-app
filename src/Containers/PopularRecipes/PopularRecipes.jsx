import React, {useState, useEffect} from 'react';
import RecipeCard from "../../Components/RecipeCard/RecipeCard.jsx"

const PopularRecipes = () => {
  const [popular, setPopular] = useState("")
  
  const getPopularRecipes = () => {
    fetch("localhost:3010/api/students")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setPopular(data)
    })
  }
  useEffect(getPopularRecipes, [])
  return (
    <div>
      <h1>Popular Recipes</h1>
     {popular && popular.map((recipes) => {
      return <RecipeCard recipes={recipes} />
     })}
      
    </div>
  )
}

export default PopularRecipes

// Create Caurasoul Component for Popular Recipes