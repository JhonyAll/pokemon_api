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

  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, image, type } = req.body;
      const { status, message } = await this.service.post(name, image, type);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default pokemonController;
