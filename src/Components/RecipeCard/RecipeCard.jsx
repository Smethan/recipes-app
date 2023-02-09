import React from "react";
import "./RecipeCard.scss";

const RecipeCard = (props) => {
	const { title, prep_time, cook_time, servings, ingredients, directions, image } = props.recipes;
	console.log(props.recipes);
	return (
		<div className="RecipeCard">
			<h1> {title} </h1>
			<br />
			<img src={image} alt={title} />
			<p>Prep-time: {prep_time} </p>
			<p>Cook Time: {cook_time} </p>
			<p>Servings: {servings} </p>
			<h2>Ingredients</h2>
			<ul>
				{ingredients.map((ingredient) => {
					return <li>{ingredient.name}</li>;
				})}
			</ul>
			<h2>Directions</h2>
			<ol>
				{directions.map((direction) => {
					return <li> {direction.content} </li>;
				})}
			</ol>
		</div>
	);
};

export default RecipeCard;
