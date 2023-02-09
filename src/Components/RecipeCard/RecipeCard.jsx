import React from 'react'

 const RecipeCard = (props) => {
  const {title, prep_time, cook_time, servings, ingredients, directions, image } = props.recipes
  return (
    <div className="RecidpeCard">
      {/* <img src={image_url} alt= {name} height="300" width="100"/> */}
      <h1>{title} </h1>
      <br />
      <img src={image} alt={title} />
      <p>Prep-time: {prep_time} </p>
      <p>Cook Time: {cook_time} </p>
      <p>Servings: {servings} </p>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(ingredients => {
          return <li>{ingredients}</li>
        })} 
      </ul>
      <h2>Directions</h2>
      <ol>
        {directions.map(direction => {
          return <li> {directions} </li>
        })}
      </ol>
    </div>
  )
}

export default RecipeCard