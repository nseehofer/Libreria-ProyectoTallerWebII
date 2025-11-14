import { type Request, type Response } from "express";
import { CategoriaService } from "../services/categoria.service.js";
import { CategoriaRepository } from "../repository/categoria.repository.js";

const categoriaRepository = new CategoriaRepository();
const categoriaService = new CategoriaService(categoriaRepository);

export class CategoriaController{
    constructor() {}

    public getCategorias = async (req: Request, res: Response) => {
        try {
            const categorias = await categoriaService.obtenerCategorias();
            res.status(200).json(categorias);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener categorias", error })
        }
    }    
}