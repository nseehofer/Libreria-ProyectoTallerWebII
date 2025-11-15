# Libreria-ProyectoTallerWebII

### 🚀 Como correr el proyecto

### 1. Instalación

1.  **Instala las dependencias** de Node.js, Ejecutar estos comandos desde la carpeta /back
    ```bash
    npm install
    ```
    Esto instalará todas las librerías listadas en `package.json`, incluyendo Prisma.

2.  **Crea tu archivo de entorno (`.env`)**
    Este archivo es **ignorado por Git** por razones de seguridad, por lo que debes crearlo manualmente.

    * Crea un archivo llamado `.env` en la raíz de la carpeta `/back`.
    * Añade la variable `DATABASE_URL` con tu string de conexión.
    * Añade la variable `JWT_SECRET` con tu secreto de token.
    * Añade la variable `NODE_ENV` con el valor `development/desarrollo`             dependiendo del entorno de trabajo

    **Ejemplo de plantilla para `.env` (usando SQL Server):**
    ```ini
    # Reemplaza los valores con tus credenciales
    DATABASE_URL="sqlserver://localhost:1433;database=db-libreria;schema=dbo;integratedSecurity=true;trustServerCertificate=true"
    JWT_SECRET="este-es-un-token-sarpado-en-cifrado-nadie-conoce-asi-que-mantenelo-oculto-de-cualquier-persona-1548976321569!"
    NODE_ENV=development"
    
    ```

3.  **Genera el Cliente de Prisma**
    Este comando lee el archivo `prisma/schema.prisma` (que ya existe en el repo) y genera el cliente de Prisma en tu `node_modules` para que puedas hacer consultas a la base de datos.

    ```bash
    npx prisma generate
    ```

### 2. Ejecutar la aplicación

Una vez completada la instalación, puedes iniciar el servidor:

```bash
# Inicia el servidor en modo de desarrollo (si tienes nodemon o similar)
npm run dev


