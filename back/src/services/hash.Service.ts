import bcrypt from 'bcrypt';


export class HashService{

    async hashearPassword(contrasenia:string) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const contraseniaHasheada = await bcrypt.hash(contrasenia, salt);
        return contraseniaHasheada;
    }

    async compararTextoPlanoConHash(contrasenia:string, contraseniaHasheada:string){
        const sonIguales = await bcrypt.compare(contrasenia, contraseniaHasheada);
        return(sonIguales)
    }
}