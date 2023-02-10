import React, { useState, useEffect } from "react";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
const AllRecipes = () => {
	const [allRecipes, setAllRecipes] = useState("");

	const getAllRecipes = () => {
		fetch(`http://${process.env.API_IP}:3010/api/recipes`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setAllRecipes(data);
			});
	};
	useEffect(getAllRecipes, []);
	return (
		<div className="main">
			<h1>All Recipes</h1>
			<div className="grid-container">
				{allRecipes &&
					allRecipes.map((recipes) => {
						return <RecipeCard recipes={recipes} />;
					})}
			</div>
		</div>
	);
};

export default AllRecipes;
