import {UsuarioRepository} from "../repository/usuario.repository.js"
import { HashService } from "./hash.Service.js";

export class UsuarioService{

    constructor(private usuarioRepository:UsuarioRepository, private hashService:HashService){}

    async obtenerUsuarios(){
        return await this.usuarioRepository.findAllUsuarios();
    }
    
    async obtenerUsuario(id:number){
        return await this.usuarioRepository.findUsuarioById(id);
    }

    async crearUsuario(data: {[key:string]:any}){
        let {nombre,apellido,email,contrase_a, direccion} = data;

        console.log(nombre,apellido);
        if(!nombre || typeof nombre !== 'string'){
            throw new Error('El nombre es obligatorio y debe ser un string')
        }

        contrase_a =  await this.hashService.hashearPassword(contrase_a);

        return await this.usuarioRepository.createUsuario({
            nombre, 
            apellido,
            email,
            contrase_a,
            direccion
            
        })
    }

    async actualizarUsuario(id:number, data: {nombre : string, apellido: string, email: string,contrase_a: string, direccion: string }){
        data.contrase_a = await this.hashService.hashearPassword(data.contrase_a);
        return await this.usuarioRepository.updateUsuario(id,data);
    }
        
    async eliminarUsuario(id:number){
        try {
            return await this.usuarioRepository.deleteUsuario(id);
        } catch (error:any) {
            if(error.code === 'P2025'){
                throw new Error('UsuarioNoExiste')
            }

            throw error;
        }
    }    
}