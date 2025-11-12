import type { CategoriaRepository } from "../repository/categoria.repository.js";

export class CategoriaService{
    
    constructor(private categoriaRepository : CategoriaRepository){}

    async obtenerCategorias(){
        return await this.categoriaRepository.findAllCategorias();
    }
}