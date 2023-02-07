import Router from "express";

import { addRecipe, deleteRecipe, getRecipeById, getRecipes } from "../controllers/recipeController.js";

const router = Router();

router.get("/", (req, res) => getRecipes(req, res));

router.get("/:id", (req, res) => getRecipeById(req, res));

router.post("/", (req, res) => addRecipe(req, res));

router.delete("/:id", (req, res) => deleteRecipe(req, res));

export default router;
