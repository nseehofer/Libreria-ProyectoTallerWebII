import { type Request, type Response } from "express";
import { AutenticadorService } from "../services/autenticador.service.js";
import { UsuarioRepository } from "../repository/usuario.repository.js";
import { HashService } from "../services/hash.Service.js";
import { type RequestConUsuario } from "../middlewares/autenticador.middleware.js";

const usuarioRepository = new UsuarioRepository();
const hashService = new HashService();
const autenticadorService = new AutenticadorService(usuarioRepository, hashService);

export class AutenticadorController {
    constructor() { }

    public signIn = async (req: Request, res: Response) => {
        try {
            const { email, contrase_a } = req.body;

            if (!email || !contrase_a) {
                return res.status(400).json({ message: 'Email y password son requeridos' });
            }

            const { token, usuario } = await autenticadorService.signIn(email, contrase_a);

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'produccion',
                sameSite: 'strict'
            });

            res.status(200).json({ token, usuario });

        } catch (error: any) {

            res.status(401).json({ message: error.message });

        }

    }

    public miPerfil = async (req: RequestConUsuario, res: Response) => {

        try {
            
            const idUsuario = req.usuario.id; 
            const usuario = await usuarioRepository.findUsuarioById(idUsuario); 
            
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            
            
            res.status(200).json({
                id: idUsuario, 
                nombre: usuario.nombre,
                email: usuario.email
                
            });

        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public cerrarSesion = (req: Request, res: Response) => {
        try {
            
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'produccion',
                sameSite: 'strict'
            });

            
            res.status(200).json({ message: 'Sesión cerrada exitosamente' });

        } catch (error: any) {
            res.status(500).json({ message: 'Error al cerrar la sesión' });
        }
    }

}