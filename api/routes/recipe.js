import Router from "express";

import { addRecipe, deleteRecipe, getRecipeById, getRecipes, uploadImage } from "../controllers/recipeController.js";
import { upload } from "../file-handler/s3upload.js";

const router = Router();

router.get("/", (req, res) => getRecipes(req, res));

router.get("/:id", (req, res) => getRecipeById(req, res));

router.post("/", (req, res) => addRecipe(req, res));

router.delete("/:id", (req, res) => deleteRecipe(req, res));

router.post("/upload", upload.single("image"), (req, res) => uploadImage(req, res));

export default router;
