// SE CREA UN MIDDLEWARE NO COMO CLASE, SINO COMO FUNCIONALIDAD

import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export interface RequestConUsuario extends Request {
  usuario?: any; 
}

export const autenticadorMiddleware = (req: RequestConUsuario, res: Response, next: NextFunction) => {
  
  const token = req.cookies.token; 

  if (!token) {
    return res.status(401).json({ message: 'No autorizado: No hay token' });
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('La clave secreta JWT no está configurada');
    }

    const payload = jwt.verify(token, secret);

    req.usuario = payload;

    next();

  } catch (error) {
    return res.status(401).json({ message: 'No autorizado: Token inválido' });
  }
};