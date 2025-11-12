interface respuestaSignIn {
  token: string;
  usuario: {
    id: number;
    email: string;
    nombre: string;
    apellido: string;
  };
}
