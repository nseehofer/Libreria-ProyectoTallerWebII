import type { LibroRepository } from "../repository/libro.repository.js";

export class LibroService {

    constructor(private libroRepository:LibroRepository){}

    async obtenerLibros(){
        return await this.libroRepository.findAllLibros();
    }

    async obtenerLibro(id:number){
        return await this.libroRepository.findLibroById(id);
    }

    async crearLibro(data: {[key:string]:any}){
        const {nombre,descripcion,precio,autor,img_src, id_categoria} = data;

      
        if(!nombre || typeof nombre !== 'string'){
            throw new Error('El nombre es obligatorio y debe ser un string')
        }

        if(!precio || typeof precio !== 'number'){
            throw new Error('El precio es obligatorio y debe ser un numero valido')
        }

        if(id_categoria !== undefined && isNaN(Number(id_categoria))){
            throw new Error('id_categoria debe ser un número valido')
        }

        

        return await this.libroRepository.createLibro({
            nombre, 
            descripcion,
            precio,
            autor,
            img_src,
            id_categoria
            
        })

    }

    async actualizarLibro(id:number, data: {nombre?:string,precio?:number,descripcion?: string,autor?: string,img_src?: string,id_categoria?:number}){
        return await this.libroRepository.updateLibro(id,data);
    }

    async eliminarLibro(id:number){
        try {
            return await this.libroRepository.deleteLibro(id);
        } catch (error:any) {
            if(error.code === 'P2025'){
                throw new Error('LibroNoExiste')
            }

            throw error;
        }
    }

}