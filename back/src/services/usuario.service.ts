import {UsuarioRepository} from "../repository/usuario.repository.js"

export class UsuarioService{

    constructor(private usuarioRepository:UsuarioRepository){}

    async obtenerUsuarios(){
        return await this.usuarioRepository.findAllUsuarios();
    }
    
    async obtenerUsuario(id:number){
        return await this.usuarioRepository.findUsuarioById(id);
    }

    async crearUsuario(data: {[key:string]:any}){
        const {nombre,apellido,email,contrase_a, direccion} = data;

        console.log(nombre,apellido);
        if(!nombre || typeof nombre !== 'string'){
            throw new Error('El nombre es obligatorio y debe ser un string')
        }

        return await this.usuarioRepository.createUsuario({
            nombre, 
            apellido,
            email,
            contrase_a,
            direccion
            
        })
    }

    async actualizarUsuario(id:number, data: {nombre : string, apellido: string, email: string,contrase_a: string, direccion: string }){
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