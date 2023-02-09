import React from "react";

const RecipeCard = (props) => {
	const { title, prep_time, cook_time, servings, ingredients, directions } = props.recipes;
	return (
		<div className="RecipeCard">
			{/* <img src={image_url} alt= {name} height="300" width="100"/> */}
			<h1>{title} </h1>
			<p>Prep-time: {prep_time} </p>
			<p>Cook Time: {cook_time} </p>
			<p>Servings: {servings} </p>
			<h2>Ingredients</h2>
			<ul>
				{ingredients.map((ingredient) => {
					return <li>{ingredient}</li>;
				})}
			</ul>
			<h2>Directions</h2>
			<ol>
				{directions.map((direction) => {
					return <li> {direction} </li>;
				})}
			</ol>
		</div>
	);
};

export default RecipeCard;
