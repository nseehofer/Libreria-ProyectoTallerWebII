import {UsuarioRepository} from "../repository/usuario.repository.js";
import jsonwebtoken from "jsonwebtoken";

export class AutenticadorService {

    constructor(private usuarioRepository:UsuarioRepository){}

    async signIn(email:string, contrase_a:string){
        const usuario = await this.usuarioRepository.buscarUsuarioPorEmail(email);

        if(!usuario || usuario.contrase_a !== contrase_a){
            throw new Error("Credenciales invalidas");
        }

        const datosUsuario = {id: usuario.id, email: usuario.email};

        const secreto = process.env.JWT_SECRET == undefined ? "secretoMalConfigurado" : process.env.JWT_SECRET;

        const token = jsonwebtoken.sign(datosUsuario, secreto, {expiresIn: "1h"});

        return {token, usuario:datosUsuario};
    }

}


