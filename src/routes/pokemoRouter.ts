import { Router } from "express";
import pokemonController from "../controller/pokemon.controller";

const controller = new pokemonController();
const pokemonRouter = Router();

pokemonRouter.get("/pokemon", controller.get.bind(controller));
pokemonRouter.post("/pokemon", controller.post.bind(controller));

export default pokemonRouter;
