use [db_libreria]

INSERT INTO dbo.Usuario (email, contraseña, nombre, apellido, direccion)
VALUES 
('ana.gomez@example.com', 'Ana123!', 'Ana', 'Gómez', 'Av. Corrientes 1234, CABA'),
('juan.perez@example.com', 'Juan456$', 'Juan', 'Pérez', 'Calle Falsa 123, Rosario'),
('maria.lopez@example.com', 'Maria789#', 'María', 'López', 'Av. San Martín 456, Córdoba'),
('carlos.mendez@example.com', 'Carlos321@', 'Carlos', 'Méndez', 'Ruta 8 Km 45, Pilar'),
('lucia.fernandez@example.com', 'Lucia654%', 'Lucía', 'Fernéndez', 'Calle Mitre 789, Mendoza');

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

INSERT INTO [Libro] ([nombre], [descripcion], [precio], [autor], [id_categoria]) VALUES
(
    'Cien Años de Soledad', 
    'La saga de la familia Buendía en el pueblo ficticio de Macondo.', 
    25.50, 
    'Gabriel García Márquez', 
    1 -- Ficción
),
(
    'Sapiens: De animales a dioses', 
    'Una breve historia de la humanidad, desde la Edad de Piedra hasta la actualidad.', 
    22.99, 
    'Yuval Noah Harari', 
    2 -- No ficción
),
(
    'Dune', 
    'En el árido planeta Arrakis, la lucha por el control de la especia "melange" define el destino de imperios.', 
    19.95, 
    'Frank Herbert', 
    3 -- Ciencia ficción
),
(
    'El Nombre del Viento', 
    'La historia de Kvothe, un músico y aventurero legendario que relata su vida a un cronista.', 
    24.00, 
    'Patrick Rothfuss', 
    4 -- Fantasía
),
(
    'Orgullo y Prejuicio', 
    'El clásico romance entre la inteligente Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX.', 
    15.75, 
    'Jane Austen', 
    5 -- Romance
),
(
    'La Sombra del Viento', 
    'Daniel Sempere descubre un libro maldito en el Cementerio de los Libros Olvidados, en la Barcelona de posguerra.', 
    21.50, 
    'Carlos Ruiz Zafón', 
    6 -- Misterio
),
(
    'Steve Jobs', 
    'La biografía autorizada del cofundador de Apple, basada en más de cuarenta entrevistas.', 
    30.00, 
    'Walter Isaacson', 
    7 -- Biografía
),
(
    'La Segunda Guerra Mundial', 
    'Un recuento detallado y crudo del conflicto global que definió el siglo XX.', 
    35.00, 
    'Antony Beevor', 
    8 -- Historia
),
(
    'El Poder del Ahora', 
    'Una guía espiritual para vivir plenamente en el presente y liberarse del sufrimiento mental.', 
    18.00, 
    'Eckhart Tolle', 
    9 -- Autoayuda
),
(
    'Donde viven los monstruos', 
    'El viaje imaginario de Max a una isla habitada por monstruos tras ser castigado en su habitación.', 
    12.99, 
    'Maurice Sendak', 
    10 -- Infantil
),

-- 5 libros extra para completar los 15
(
    '1984', 
    'Una novela distópica sobre un futuro totalitario donde el "Gran Hermano" todo lo ve.', 
    17.50, 
    'George Orwell', 
    1 -- Ficción
),
(
    'El Código Da Vinci', 
    'El simbologista Robert Langdon investiga un misterioso asesinato en el Museo del Louvre.', 
    20.00, 
    'Dan Brown', 
    6 -- Misterio
),
(
    'El Hobbit', 
    'Bilbo Bolsón, un hobbit amante de la comodidad, se embarca en una aventura épica para reclamar un tesoro.', 
    16.50, 
    'J.R.R. Tolkien', 
    4 -- Fantasía
),
(
    'Hábitos Atómicos', 
    'Un método probado para construir buenos hábitos y romper los malos a través de pequeñas mejoras.', 
    23.50, 
    'James Clear', 
    2 -- No ficción
),
(
    'Fundación', 
    'El psicohistoriador Hari Seldon predice la caída del Imperio Galáctico y crea un plan para salvar el conocimiento.', 
    22.00, 
    'Isaac Asimov', 
    3 -- Ciencia ficción
);
GO