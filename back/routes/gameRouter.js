import { Router } from "express";
import { newGame } from "../controllers/gameController.js";

const router = Router();

router
.route("/api/newgame")
.post(newGame)

export { router };