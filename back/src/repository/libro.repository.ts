import { prisma } from "../prisma.js";

export class LibroRepository{

    async findAllLibros(){
        return await prisma.libro.findMany(
            {
                include : {Categoria : true}
            }
        )
    }

    async findLibroById(id:number){
        return await prisma.libro.findUnique(
            {
                where : {id : id},
                include : {
                    Categoria : true
                }
            }
        )
    }


    async createLibro(data : {nombre : string,precio:number,descripcion: string,autor: string, id_categoria?:number}){
        return await prisma.libro.create({
            data
        })
    }

    async updateLibro(id:number,  data : {nombre?:string,precio?:number,descripcion?: string,autor?: string, id_categoria?:number}){
        return await prisma.libro.update({
            where : {id},
            data
        })
    }

    async deleteLibro(id:number){
        return await prisma.libro.delete({
            where : {id}
        })
    }
    

}