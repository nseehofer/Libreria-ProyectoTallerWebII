import {Router} from "express";
import { LibroController } from "../../controllers/libro.controller.js";

const libroRouter = Router();
const libroController = new LibroController();

libroRouter.get('/',libroController.getLibros.bind(libroController));
libroRouter.get('/:id',libroController.getLibro.bind(libroController));
libroRouter.post('/',libroController.crearLibro.bind(libroController));
libroRouter.put('/:id',libroController.actualizarLibro.bind(libroController));
libroRouter.delete('/:id',libroController.eliminarLibro.bind(libroController));


export default libroRouter;