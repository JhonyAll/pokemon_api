import { ModelStatic } from "sequelize";
import Pokemon from "../database/models/Pokemon";

class pokemonService {
  private model: ModelStatic<Pokemon> = Pokemon;

  async get() {
    const pokemons = await this.model.findAll();
    return { status: 200, message: pokemons };
  }

  async post(name: string, image: string, type: string[]) {
    const result = await this.model.create({name: name, image: image, type: type})
    return { status: 200, message: result }
  }
}

export default pokemonService;