import { Recipe } from "../models/recipeModel.js";

export const getRecipes = (req, res) => {
	Recipe.find()
		.then((recipes) => {
			res.status(200).send(recipes);
		})
		.catch((err) => console.log(err));
};

export const getRecipeById = (req, res) => {
	Recipe.findById(req.params.id)
		.then((recipe) => {
			res.status(200).send(recipe || `Recipe with id: ${req.params.id} not found`);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const addRecipe = (req, res) => {
	const newRecipe = new Recipe({
		title: req.body.title,
		prep_time: req.body.prep_time,
		cook_time: req.body.cook_time,
		servings: req.body.servings,
		ingredients: req.body.ingredients,
		directions: req.body.directions,
	});
	newRecipe.save((err, recipe) => {
		if (err) {
			res.send({ message: err });
		} else {
			res.status(201).json(recipe);
		}
	});
};

export const deleteRecipe = (req, res) => {
	const id = req.params.id;
	Recipe.deleteOne({ where: { id: id } })
		.then(() => {
			res.status(204).send("Deleted");
		})
		.catch((err) => {
			console.log(err);
		});
};

export const uploadImage = (req, res) => {
	try {
		res.json(req.file.location);
	} catch (error) {
		console.log(error);
		res.send({ message: error });
	}
};
