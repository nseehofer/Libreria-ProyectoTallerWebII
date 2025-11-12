import {UsuarioRepository} from "../repository/usuario.repository.js";
import jsonwebtoken from "jsonwebtoken";
import { HashService } from "./hash.Service.js";

export class AutenticadorService {

    constructor(private usuarioRepository:UsuarioRepository, private hashService:HashService){}

    async signIn(email:string, contrase_a:string){
        const usuario = await this.usuarioRepository.buscarUsuarioPorEmail(email);
        
        if(!usuario || !await this.hashService.compararTextoPlanoConHash(contrase_a, usuario.contrase_a )){
            throw new Error("Credenciales invalidas");
        }

        const datosUsuario = {id: usuario.id, email: usuario.email, nombre: usuario.nombre, apellido: usuario.apellido};

        const secreto = process.env.JWT_SECRET == undefined ? "secretoMalConfigurado" : process.env.JWT_SECRET;

        const token = jsonwebtoken.sign(datosUsuario, secreto, {expiresIn: "1h"});

        return {token, usuario:datosUsuario};
    }

}


