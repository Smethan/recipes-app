import React, { useState } from "react";

const AddRecipe = () => {
	const [title, setTitle] = useState("");
	const [prepTime, setPrepTime] = useState("");
	const [cookTime, setCookTime] = useState("");
	const [servings, setServings] = useState("");
	const [ingredients, setIngredients] = useState([{}]);
	const [directions, setDirections] = useState([{}]);

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

	const handleIngredients = (e) => {
		e.preventDefault();
		setIngredients([...ingredients, {}]);
	};

	const handleArrays = (e, i) => {
		e.preventDefault();
		const { name, value } = e.target;
		switch (name) {
			case "ingredient":
				setIngredients((PrevState) => {
					let temp = PrevState;
					temp[i].name = value;
					return temp;
				});
				break;
			case "direction":
				setDirections((PrevState) => {
					let temp = PrevState;
					temp[i].content = value;

					return temp;
				});
				break;

			default:
				break;
		}
	};

	const addRecipe = {
		title: title,
		prep_time: prepTime,
		cook_time: cookTime,
		servings: servings,
		ingredients: ingredients,
		directions: directions,
		image: "",
	};

	const postRecipe = () => {
		console.log(addRecipe);
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

				<ul style={{ listStyle: "none" }}>
					{ingredients.map((ingredient, i) => {
						const index = i;
						return (
							<li>
								<input
									type="text"
									name="ingredient"
									value={ingredient.name}
									placeholder="Enter ingredient name"
									onChange={(e) => {
										handleArrays(e, i);
									}}
								/>
							</li>
						);
					})}
					<li>
						<button type="button" onClick={handleIngredients}>
							Add Ingredient
						</button>
					</li>
				</ul>
				<ul style={{ listStyle: "none" }}>
					{directions.map((direction, i) => {
						const index = i;
						return (
							<li>
								<input
									type="text"
									name="direction"
									value={direction.content}
									placeholder="Enter direction name"
									onChange={(e) => {
										handleArrays(e, i);
									}}
								/>
							</li>
						);
					})}
					<li>
						<button
							type="button"
							onClick={() => {
								setDirections([...directions, {}]);
							}}
						>
							Add Direction
						</button>
					</li>
				</ul>
			</form>
			<p>
				{" "}
				{title} {prepTime} {cookTime} {servings}{" "}
			</p>
			<button onClick={postRecipe}>poost</button>
		</div>
	);
};

export default AddRecipe;
