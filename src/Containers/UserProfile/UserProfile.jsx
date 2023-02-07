import React, { useState, useEffect } from 'react'
import RecipeCard from "../../Components/RecipeCard/RecipeCard"


const UserProfile = () => {
  const [userRecipes, setUserRecipes] = useState("")
  const getUserRecipes = () => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=10")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setUserRecipes(data)
    })
  }
  useEffect(getUserRecipes, [])
  return (
    <div>
      <h1>My Recipes</h1>
      {userRecipes && userRecipes.map((recipes => {
        return <RecipeCard recipes= {recipes} />
      }))}
      </div>
  )
}

export default UserProfile