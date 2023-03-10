import React, { useState, useEffect } from "react";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import SearchBox from "../../Components/SearchBox/SearchBox";
import AddRecipe from "../../Components/AddRecipe/AddRecipe";

const UserProfile = () => {
	const [userRecipes, setUserRecipes] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const getUserRecipes = () => {
		fetch(`http://${process.env.REACT_APP_API_IP}:3010/api/recipes`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setUserRecipes(data);
				console.log(data);
			});
	};
	useEffect(getUserRecipes, []);

	// All Users Recipes
	const allRecipes =
		userRecipes &&
		userRecipes.map((recipes) => {
			return <RecipeCard recipes={recipes} />;
		});

	const handleInput = (e) => {
		const cleanInput = e.target.value.toLowerCase();
		setSearchTerm(cleanInput);
	};
	const filterRecipes =
		userRecipes &&
		userRecipes.filter((recipe) => {
			return recipe.title.toLowerCase().includes(searchTerm);
		});
	//Map over Searched Recipes
	const searchedRecipes =
		filterRecipes &&
		filterRecipes.map((recipes) => {
			return <RecipeCard recipes={recipes} />;
		});

	return (
		<div>
			<nav>
				<SearchBox handleInput={handleInput} searchTerm={searchTerm} />
				<AddRecipe />
			</nav>
			<h1>My Recipes</h1>
			{searchTerm ? searchedRecipes : allRecipes}
		</div>
	);
};

export default UserProfile;
