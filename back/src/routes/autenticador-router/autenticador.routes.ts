import {Router} from "express";
import { AutenticadorController } from "../../controllers/autenticador.controller.js";

const autenticadorRouter = Router();
const autenticadorController = new AutenticadorController();

autenticadorRouter.post('/signIn', autenticadorController.signIn);

export default autenticadorRouter;