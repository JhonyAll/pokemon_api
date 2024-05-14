"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class Pokemon extends sequelize_1.Model {
}
Pokemon.init({
    id: {
        type: sequelize_2.default.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_2.default.TEXT,
    },
    type: {
        type: sequelize_2.default.JSON,
        allowNull: false,
    },
}, { sequelize: _1.default, tableName: "pokemon", timestamps: false });
exports.default = Pokemon;
