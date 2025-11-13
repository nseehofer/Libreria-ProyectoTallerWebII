import {Router} from "express";
import { AutenticadorController } from "../../controllers/autenticador.controller.js";
import { autenticadorMiddleware } from "../../middlewares/autenticador.middleware.js";

const autenticadorRouter = Router();
const autenticadorController = new AutenticadorController();


autenticadorRouter.post('/signIn', autenticadorController.signIn);

autenticadorRouter.post('/cerrar-sesion', autenticadorController.cerrarSesion);

autenticadorRouter.get('/profile', autenticadorMiddleware, autenticadorController.miPerfil);

export default autenticadorRouter;