import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	title: String,
	prep_time: Number,
	cook_time: Number,
	servings: Number,
	ingredients: [String],
	directions: [String],
});

const Recipe = mongoose.model("recipe", RecipeSchema);

export { Recipe };
