import {Router} from "express";
import { CategoriaController } from "../../controllers/categoria.controller.js";

const categoriaRouter = Router();
const categoriaController = new CategoriaController;

categoriaRouter.get('/', categoriaController.getCategorias.bind(categoriaController));

export default categoriaRouter;