import React, { useState, useEffect } from "react";
import RecipeCard from "../../Components/RecipeCard/RecipeCard.jsx";
import "./FeatureRecipe.scss";

const FeatureRecipe = (props) => {
	const [featured, setFeatured] = useState("");

	const getFeaturedRecipe = () => {
		fetch(`http://${process.env.REACT_APP_API_IP}:3010/api/recipes`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setFeatured(data);
			});
	};

	useEffect(getFeaturedRecipe, []);
	return (
		<div className="recipe-card-container">
			<div className="card">
				<h1>Recipe of the Month</h1>
				{featured &&
					featured.map((recipes) => {
						return <RecipeCard recipes={recipes} />;
					})}
				<button>GET THE RECIPE</button>
			</div>
		</div>
	);
};

export default FeatureRecipe;

//Create another container for Popular Recipes and pass beercard into them
