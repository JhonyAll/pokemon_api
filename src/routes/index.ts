import { Router } from "express";
import pokemonRouter from "./pokemoRouter";

const router = Router();
router.use(pokemonRouter);
router.get("/", (req, res) => res.json({ msg: "okay" }));

export default router;
