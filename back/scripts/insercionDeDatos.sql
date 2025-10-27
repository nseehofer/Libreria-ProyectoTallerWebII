use [db-libreria]

INSERT INTO dbo.Usuario (email, contrase�a, nombre, apellido, direccion)
VALUES 
('ana.gomez@example.com', 'Ana123!', 'Ana', 'G�mez', 'Av. Corrientes 1234, CABA'),
('juan.perez@example.com', 'Juan456$', 'Juan', 'P�rez', 'Calle Falsa 123, Rosario'),
('maria.lopez@example.com', 'Maria789#', 'Mar�a', 'L�pez', 'Av. San Mart�n 456, C�rdoba'),
('carlos.mendez@example.com', 'Carlos321@', 'Carlos', 'M�ndez', 'Ruta 8 Km 45, Pilar'),
('lucia.fernandez@example.com', 'Lucia654%', 'Luc�a', 'Fern�ndez', 'Calle Mitre 789, Mendoza');

INSERT INTO Categoria (nombre)
VALUES 
    ('Ficción'),
    ('No ficción'),
    ('Ciencia ficción'),
    ('Fantasía'),
    ('Romance'),
    ('Misterio'),
    ('Biografía'),
    ('Historia'),
    ('Autoayuda'),
    ('Infantil');