import { Router } from "express";
import libroRouter from "./libro-router/libro.routes.js";
import usuarioRouter from "./usuario-router/usuario.routes.js";
export class AppRoutes {

    static get routes():Router {

        const  router = Router();

        router.use('/libros',libroRouter) // Problema por el cual no me reconocia la URL /api ya esta en index.ts
        router.use('/usuario',usuarioRouter)

        return router;
    }

}