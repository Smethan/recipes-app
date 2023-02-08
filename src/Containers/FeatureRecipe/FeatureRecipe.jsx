import React, { useState, useEffect} from 'react';
import RecipeCard from "../../Components/RecipeCard/RecipeCard.jsx";

const FeatureRecipe = () => {
  const [featured, setFeatured] = useState("")
  
  const getFeaturedRecipe = () => {
    fetch('localhost:3010/api/recipes')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setFeatured(data)
    })
  }

  useEffect(getFeaturedRecipe, [])
  return (
    <div>
      <h1>Recipe of the Month</h1>
      {featured && featured.map((recipes) => {
        return <RecipeCard recipes= {recipes} />
      })}
    </div>
  )
}

export default FeatureRecipe


//Create another container for Popular Recipes and pass beercard into them