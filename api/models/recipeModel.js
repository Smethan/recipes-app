import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	title: String,
	prep_time: String,
	cook_time: String,
	servings: Number,
	ingredients: [{ name: String }],
	directions: [{ content: String }],
});

const Recipe = mongoose.model("recipe", RecipeSchema);

export { Recipe };
