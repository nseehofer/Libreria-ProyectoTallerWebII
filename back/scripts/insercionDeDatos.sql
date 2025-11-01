USE [db-libreria];
GO

INSERT INTO dbo.Usuario (email, contraseña, nombre, apellido, direccion) VALUES 
('ana.gomez@example.com', 'Ana123!', 'Ana', 'Gómez', 'Av. Corrientes 1234, CABA'),
('juan.perez@example.com', 'Juan456$', 'Juan', 'Pérez', 'Calle Falsa 123, Rosario'),
('maria.lopez@example.com', 'Maria789#', 'María', 'López', 'Av. San Martín 456, Córdoba'),
('carlos.mendez@example.com', 'Carlos321@', 'Carlos', 'Méndez', 'Ruta 8 Km 45, Pilar'),
('lucia.fernandez@example.com', 'Lucia654%', 'Lucía', 'Fernéndez', 'Calle Mitre 789, Mendoza');
GO

INSERT INTO Categoria (nombre) VALUES 
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
GO

INSERT INTO [Libro] ([nombre], [descripcion], [precio], [autor], [id_categoria], [img-src]) VALUES 
('Cien Años de Soledad', 'La saga de la familia Buendía en el pueblo ficticio de Macondo.', 28500.50, 'Gabriel García Márquez', 1, 'https://i.postimg.cc/Z5wFfPqK/Cien-Anos-De-Soledad.jpg'),
('Sapiens: De animales a dioses', 'Una breve historia de la humanidad, desde la Edad de Piedra hasta la actualidad.', 31990.00, 'Yuval Noah Harari', 2, 'https://i.postimg.cc/bvd04GGd/sapiens-De-Animales-ADioses.jpg'),
('Dune', 'En el árido planeta Arrakis, la lucha por el control de la especia "melange" define el destino de imperios.', 24950.00, 'Frank Herbert', 3, 'https://i.postimg.cc/DwxdCQzF/Dune.webp'),
('El Nombre del Viento', 'La historia de Kvothe, un músico y aventurero legendario que relata su vida a un cronista.', 33000.00, 'Patrick Rothfuss', 4, 'https://i.postimg.cc/Mp9bs0Gp/El-Nombre-Del-Viento.jpg'),
('Orgullo y Prejuicio', 'El clásico romance entre la inteligente Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX.', 18750.00, 'Jane Austen', 5, 'https://i.postimg.cc/5tj5DHHN/Orgullo-Prejuicio.jpg'),
('La Sombra del Viento', 'Daniel Sempere descubre un libro maldito en el Cementerio de los Libros Olvidados, en la Barcelona de posguerra.', 29500.00, 'Carlos Ruiz Zafón', 6, 'https://i.postimg.cc/s21PbBB2/La-Sombra-Del-Viento.jpg'),
('Steve Jobs', 'La biografía autorizada del cofundador de Apple, basada en más de cuarenta entrevistas.', 45000.00, 'Walter Isaacson', 7, 'https://i.postimg.cc/zf3w4LLb/Steve-Jobs.webp'),
('La Segunda Guerra Mundial', 'Un recuento detallado y crudo del conflicto global que definió el siglo XX.', 58000.50, 'Antony Beevor', 8, 'https://i.postimg.cc/CKdC9ZZV/La-Segunda-Guerra-Mundial.webp'),
('El Poder del Ahora', 'Una guía espiritual para vivir plenamente en el presente y liberarse del sufrimiento mental.', 21000.00, 'Eckhart Tolle', 9, 'https://i.postimg.cc/q7gcWttH/El-Poder-Del-Ahora.jpg'),
('Donde viven los monstruos', 'El viaje imaginario de Max a una isla habitada por monstruos tras ser castigado en su habitación.', 15990.00, 'Maurice Sendak', 10, 'https://i.postimg.cc/kgTFjN5n/Donde-Viven-Los-Monstruos.webp'),
('1984', 'Una novela distópica sobre un futuro totalitario donde el "Gran Hermano" todo lo ve.', 22500.00, 'George Orwell', 1, 'https://i.postimg.cc/JzpcT3hW/1984.webp'),
('El Código Da Vinci', 'El simbologista Robert Langdon investiga un misterioso asesinato en el Museo del Louvre.', 27000.00, 'Dan Brown', 6, 'https://i.postimg.cc/sgT9nP2s/El-Codigo-Da-Vinci-Dan-Brown.jpg'),
('El Hobbit', 'Bilbo Bolsón, un hobbit amante de la comodidad, se embarca en una aventura épica para reclamar un tesoro.', 19900.00, 'J.R.R. Tolkien', 4, 'https://i.postimg.cc/qv1Xmc7J/El-Hobbit.jpg'),
('Hábitos Atómicos', 'Un método probado para construir buenos hábitos y romper los malos a través de pequeñas mejoras.', 31500.00, 'James Clear', 2, 'https://i.postimg.cc/QMVgvBBD/Habitos-Atomicos-James-Clear.jpg'),
('Fundación', 'El psicohistoriador Hari Seldon predice la caída del Imperio Galáctico y crea un plan para salvar el conocimiento.', 29800.00, 'Isaac Asimov', 3, 'https://i.postimg.cc/MGX0gccx/Fundacion-Isaac-Asimov.jpg');
GO