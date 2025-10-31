import { type Request, type Response } from "express";
import { AutenticadorService } from "../services/autenticador.service.js";
import { UsuarioRepository } from "../repository/usuario.repository.js";

const usuarioRepository = new UsuarioRepository();
const autenticadorService = new AutenticadorService(usuarioRepository);

export class AutenticadorController {
    constructor() { }

    public signIn = async (req: Request, res: Response) => {
        try {
            const { email, contrase_a } = req.body;

            if (!email || !contrase_a) {
                return res.status(400).json({ message: 'Email y password son requeridos' });
            }

            const { token, usuario } = await autenticadorService.signIn(email, contrase_a);

            res.status(200).json({ token, usuario });

        } catch (error: any) {

            res.status(401).json({ message: error.message });

        }
        
    }

}