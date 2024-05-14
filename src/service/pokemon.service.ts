import { ModelStatic } from "sequelize";
import Pokemon from "../database/models/Pokemon";
import sequelize from "sequelize";

class pokemonService {
  private model: ModelStatic<Pokemon> = Pokemon;

  async get(name: string = "") {
    const pokemons = await this.model.findAll({
      where: {
        name: {
          [sequelize.Op.like]: `%${name}%`,
        },
      },
    });
    return { status: 200, message: pokemons };
  }

  async post(name: string, image: string, type: string[]) {
    const result = await this.model.create({
      name: name,
      image: image,
      type: type,
    });
    return { status: 200, message: result };
  }
}

export default pokemonService;
