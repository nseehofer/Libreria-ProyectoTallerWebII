import express, {type Request, type Response} from "express";
import { AppRoutes } from "./routes/routes.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

const PORT = 3000;
app.use(cors({
  origin: 'http://localhost:4200', 
  credentials: true               
}));
app.use(express.json());
app.use(cookieParser());

//app.use(cors())


app.use('/api', AppRoutes.routes);

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});