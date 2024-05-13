import { ModelStatic } from "sequelize";
import Pokemon from "../database/models/Pokemon";

class pokemonService {
  private model: ModelStatic<Pokemon> = Pokemon;

  async get() {
    const pokemons = await this.model.findAll();
    return { status: 200, message: pokemons };
  }
}
export default pokemonService;
