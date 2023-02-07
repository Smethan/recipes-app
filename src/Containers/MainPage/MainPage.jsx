import React from 'react'
import { useState, useEffect } from 'react'
import { RecipeCard } from '../../Components/RecipeCard/RecipeCard'

const MainPage = () => {
  const [url, setUrl] = useState(``)
  const [featured, setFeatured] = useState('https://api.punkapi.com/v2/beers/random')

  const [recipes, setRecipes] = useState('https://api.punkapi.com/v2/beers?page=2&per_page=3')
  
  // Fetch for Recipe
  const getRecipe = () => {
    fetch(featured) 
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setUrl(data)
      console.log(featured)
      })
    }
    useEffect(getRecipe, [featured])
  

 return (
   <div>
     <h1>Best Recipes</h1>
      
   </div>
 )
 }

export default MainPage