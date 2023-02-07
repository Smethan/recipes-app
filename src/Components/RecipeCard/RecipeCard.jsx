import React from 'react'

 const RecipeCard = (props) => {
  const {name, description, image_url } = props.recipes
  return (
    <div className="RecidpeCard">
      <img src={image_url} alt= {name} height="300" width="100"/>
      <h1>{name} </h1>
      <p>{description}</p>
    </div>
  )
}

export default RecipeCard