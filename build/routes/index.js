"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemoRouter_1 = __importDefault(require("./pokemoRouter"));
const router = (0, express_1.Router)();
router.use(pokemoRouter_1.default);
router.get("/", (req, res) => res.json({ msg: "okay" }));
exports.default = router;
