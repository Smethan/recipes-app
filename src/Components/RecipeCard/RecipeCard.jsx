import React from 'react'
import "./RecipeCard.scss"

 const RecipeCard = (props) => {
  const {name, description, image_url } = props.recipes
  return (
    <main>
    <div className="feat-recipecard">
        <div className="card-contents">
      <img className="image" src={image_url} alt= {name} height="300" width="100"/>
      <div className="desc-contents">
      <h1>{name} </h1>
      <p>{description}</p>
      </div>
    </div>
    </div>
    </main>
  )
}

export default RecipeCard