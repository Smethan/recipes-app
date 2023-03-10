import React, { useState, useEffect } from "react";
import NavBottom from "../../Components/Nav/NavBottom.jsx";
import RecipeCard from "../../Components/RecipeCard/RecipeCard.jsx";
import "./PopularRecipes.scss";

const PopularRecipes = () => {
	const [popular, setPopular] = useState("");

	const getPopularRecipes = () => {
		fetch(`http://${process.env.REACT_APP_API_IP}:3010/api/recipes`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPopular(data);
			});
	};
	useEffect(getPopularRecipes, []);
	return (
		<div className="main">
			<h1>Popular Recipes</h1>
			<div className="grid-container">
				{popular &&
					popular.map((recipes) => {
						return <RecipeCard recipes={recipes} />;
					})}
			</div>
		</div>
	);
};

export default PopularRecipes;

// Create Caurasoul Component for Popular Recipes
