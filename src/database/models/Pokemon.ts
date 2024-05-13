import { Model } from "sequelize";
import db from ".";
import sequelize from "sequelize";

class Pokemon extends Model {
  declare id: number;
  declare name: string;
  declare image: string;
  declare type: string[];
}

Pokemon.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: sequelize.TEXT,
    },
    type: {
      type: sequelize.JSON,
      allowNull: false,
    },
  },
  { sequelize: db, tableName: "pokemon", timestamps: false }
);

export default Pokemon;
