CREATE DATABASE [db-libreria]
USE [db-libreria]
-- Nombre de db "db-libreria"
-- -----------------------------------------------------
-- Tabla: Categoria
-- Se crea primero porque 'Libro' depende de ella.
-- -----------------------------------------------------
CREATE TABLE [Categoria] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [nombre] NVARCHAR(100) NOT NULL
);
GO

-- -----------------------------------------------------
-- Tabla: Usuario
-- -----------------------------------------------------
CREATE TABLE [Usuario] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [email] NVARCHAR(255) NOT NULL UNIQUE,
    [contraseña] NVARCHAR(255) NOT NULL, -- Se recomienda guardar un hash
    [nombre] NVARCHAR(100) NOT NULL,
    [apellido] NVARCHAR(100) NOT NULL,
    [direccion] NVARCHAR(255) NULL
);
GO

-- -----------------------------------------------------
-- Tabla: Libro
-- Contiene la Llave Foránea (FK) a 'Categoria'
-- -----------------------------------------------------
CREATE TABLE [Libro] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [nombre] NVARCHAR(255) NOT NULL,
    [descripcion] NVARCHAR(MAX) NULL, -- 'TEXT' de MySQL es 'NVARCHAR(MAX)' en SQL Server
    [precio] DECIMAL(10, 2) NOT NULL,
    [autor] NVARCHAR(255) NOT NULL,
    [img-src] NVARCHAR(255) NOT NULL,
    
    -- Llave Foránea
    [id_categoria] INT NOT NULL,
    
    CONSTRAINT [fk_libro_categoria]
        FOREIGN KEY ([id_categoria]) 
        REFERENCES [Categoria]([id])
        ON DELETE NO ACTION -- 'RESTRICT' de MySQL equivale a 'NO ACTION' en SQL Server
        ON UPDATE CASCADE
);
GO