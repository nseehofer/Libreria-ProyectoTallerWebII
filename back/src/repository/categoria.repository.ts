import { prisma } from "../prisma.js";

export class CategoriaRepository{

    async findAllCategorias(){
        return await prisma.categoria.findMany()
    }
}