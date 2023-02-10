import express from "express";
import router from "./routes/recipe.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3010;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`mongodb://mongo:changeme@${process.env.MONGO_IP}:27017/recipes`, {
	useNewUrlParser: true,
});

app.use("/api/recipes", router);

app.get("/api", (req, res) => {
	res.send("Welcome to my API!");
});

app.get("*", (req, res) => res.status(404).send("There is no content at this route."));

app.listen(port, () => console.log(`Server is listening on port ${port}, Environment = ${process.env.NODE_ENV}`));

export default app;
