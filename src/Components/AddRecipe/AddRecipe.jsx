import React, { useState } from "react";

const AddRecipe = () => {
	const [title, setTitle] = useState("");
	const [prepTime, setPrepTime] = useState("");
	const [cookTime, setCookTime] = useState("");
	const [servings, setServings] = useState("");
	const [ingredients, setIngredients] = useState([]);

	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	const handlePrepTime = (e) => {
		setPrepTime(e.target.value);
	};
	const handleCookTime = (e) => {
		setCookTime(e.target.value);
	};
	const handleServings = (e) => {
		setServings(e.target.value);
	};

	const addRecipe = {
		title: title,
		prepTime: prepTime,
		cookTime: cookTime,
		servings: servings,
		image: "",
	};

	const postRecipe = () => {
		fetch("http://127.0.0.1:3010/api/recipes", {
			headers: {
				Accept: "application/json",
				"content-type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(addRecipe),
		});
	};
	return (
		<div>
			<h2>Add a New Recipe</h2>
			<form>
				<label> Recipe Title</label>
				<input type="text" required value={title} onChange={handleTitle} />

				<label> Prep-Time</label>
				<input type="text" required value={prepTime} onChange={handlePrepTime} />

				<label> Cook Time </label>
				<input type="text" required value={cookTime} onChange={handleCookTime} />

				<label> Servings </label>
				<input type="text" required value={servings} onChange={handleServings} />
			</form>
			<p>
				{" "}
				{title} {prepTime} {cookTime} {servings}{" "}
			</p>
		</div>
	);
};

export default AddRecipe;
