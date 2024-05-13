import { NextFunction, Request, Response } from "express";
import pokemonService from "../service/pokemon.service";
class pokemonController {
  private service = new pokemonService();

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.get();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default pokemonController;
