"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_controller_1 = __importDefault(require("../controller/pokemon.controller"));
const controller = new pokemon_controller_1.default();
const pokemonRouter = (0, express_1.Router)();
pokemonRouter.get("/pokemon", controller.get.bind(controller));
exports.default = pokemonRouter;
