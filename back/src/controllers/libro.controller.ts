import { type Request, type Response } from "express";
import { LibroService } from "../services/libro.service.js";
import { LibroRepository } from "../repository/libro.repository.js";

const libroRepository = new LibroRepository();
const libroService = new LibroService(libroRepository);

export class LibroController {

    constructor() { }


    public getLibros = async (req: Request, res: Response) => {
        try {
            const libros = await libroService.obtenerLibros();
            res.status(200).json(libros);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener libros", error })
        }
    }

    public getLibro = async (req: Request, res: Response) => {

        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json("ID inválido")
            }

            const libro = await libroService.obtenerLibro(id);

            if (!libro) {
                return res.status(404).json({ message: 'libro no encontrado' })
            }

            res.status(200).json(libro);


        } catch (error) {
            res.status(500).json({ message: "No se pudo obtener el libro", error })
        }
    }

    public crearLibro = async (req: Request, res: Response) => {
        try {
            const libroACrear = req.body
            
            const libro = await libroService.crearLibro(libroACrear);
            res.status(201).json(libro)
        } catch (error) {
            res.status(500).json({ message: "No se pudo crear el libro", error })
        }
    }

    public actualizarLibro = async (req: Request, res: Response) => {

        const id = Number(req.params.id);
        const { nombre,precio,descripcion,autor, id_categoria } = req.body;

        if (isNaN(id)) {
            return res.status(400).json("ID inválido")
        }

        try {
            const libroActualizado = await libroService.actualizarLibro(id, { nombre,precio,descripcion,autor, id_categoria })
            res.status(200).json(libroActualizado);
        } catch (error) {
            res.status(500).json({ message: "No se pudo actualizar el libro", error })
        }

    }

    public eliminarLibro = async (req: Request, res: Response) => {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json("ID inválido")
        }

        try {
            await libroService.eliminarLibro(id);
            res.status(204).send();
        } catch (error:any) {
            if(error.message === "libroNoExiste"){
                return res.status(404).json({message : "libro no encontrado"})
            }

            res.status(500).json({ message: "No se pudo eliminar el libro", error })
        }
    }

}