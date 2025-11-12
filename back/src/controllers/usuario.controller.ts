import { type Request, type Response } from "express";
import { UsuarioRepository } from "../repository/usuario.repository.js"
import { UsuarioService } from "../services/usuario.service.js";
import { HashService } from "../services/hash.Service.js";

const usuarioRepository = new UsuarioRepository();
const hashService = new HashService();
const usuarioService = new UsuarioService(usuarioRepository,hashService);

export class UsuarioController{

    constructor(){}

    public getUsuarios = async(req: Request, res: Response)=>{ 

        try {
            const usuarios = await usuarioService.obtenerUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({message: "Error al obtener usuarios", error})
        }
    }

    public getUsuario = async (req: Request, res: Response) => {

        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json("ID inválido")
            }

            const usuario = await usuarioService.obtenerUsuario(id);

            if (!usuario) {
                return res.status(404).json({ message: 'usuario no encontrado' })
            }

            res.status(200).json(usuario);


        } catch (error) {
            res.status(500).json({ message: "No se pudo obtener el usuario", error })
        }
    }

    public crearUsuario = async (req: Request, res: Response) => {
        try {
            const usuarioACrear = req.body
            
            const Usuario = await usuarioService.crearUsuario(usuarioACrear);
            res.status(201).json(Usuario)
        } catch (error:any) {
            if (error.message === "EmailYaRegistrado") {
        return res.status(409).json({ message: "El email ya esta registrado" });
        }

            res.status(500).json({ message: "No se pudo crear el usuario", error })
        }
    }

    public actualizarUsuario = async (req: Request, res: Response) => {

        const id = Number(req.params.id);
        const { nombre,apellido,email,contrase_a, direccion } = req.body;

        if (isNaN(id)) {
            return res.status(400).json("ID inválido")
        }

        try {
            const UsuarioActualizado = await usuarioService.actualizarUsuario(id, { nombre, apellido, email,contrase_a, direccion })
            res.status(200).json(UsuarioActualizado);
        } catch (error) {
            res.status(500).json({ message: "No se pudo actualizar el Usuario", error })
        }

    }
        
    public eliminarUsuario = async (req: Request, res: Response) => {

        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json("ID inválido")
        }

        try {
            await usuarioService.eliminarUsuario(id);
            res.status(204).send();
        } catch (error:any) {
            if(error.message === "UsuarioNoExiste"){
                return res.status(404).json({message : "Usuario no encontrado"})
            }

            res.status(500).json({ message: "No se pudo eliminar el Usuario", error })
        }
    }     
}