import express, {type Request, type Response} from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Estoy aca papu!!!');
});

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});