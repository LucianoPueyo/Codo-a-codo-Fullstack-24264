-- Crear tabla Alumno
CREATE TABLE Alumno (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(10) NOT NULL UNIQUE
);

-- Crear tabla Docente
CREATE TABLE Docente (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(10) NOT NULL UNIQUE,
    cuit VARCHAR(15) NOT NULL UNIQUE
);

-- Crear tabla Curso
CREATE TABLE Curso (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    turno VARCHAR(20) NOT NULL,
    cupos_maximos INT NOT NULL CHECK (cupos_maximos > 0),
    docente_id INT,
    FOREIGN KEY (docente_id) REFERENCES Docente (id) ON DELETE SET NULL
);

-- Crear tabla Inscripcion (relación muchos-a-muchos entre Alumno y Curso)
CREATE TABLE Inscripcion (
    id SERIAL PRIMARY KEY,
    alumno_id INT NOT NULL,
    curso_id INT NOT NULL,
    fecha_inscripcion DATE NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY (alumno_id) REFERENCES Alumno (id) ON DELETE CASCADE,
    FOREIGN KEY (curso_id) REFERENCES Curso (id) ON DELETE CASCADE,
    UNIQUE (alumno_id, curso_id) -- para evitar duplicados de inscripción
);

----------------------

-- Insertar datos en la tabla Alumno
INSERT INTO Alumno (nombre, apellido, dni) VALUES 
('Juan', 'Pérez', '12345678A'),
('María', 'Gómez', '23456789B'),
('Carlos', 'Rodríguez', '34567890C'),
('Ana', 'López', '45678901D'),
('Luis', 'Martínez', '56789012E'),
('Laura', 'García', '67890123F'),
('Jorge', 'Hernández', '78901234G'),
('Elena', 'Sánchez', '89012345H'),
('Miguel', 'Díaz', '90123456I'),
('Sara', 'Fernández', '01234567J');

-- Insertar datos en la tabla Docente
INSERT INTO Docente (nombre, apellido, dni, cuit) VALUES 
('Mario', 'Gutiérrez', '11223344A', '20-11223344-1'),
('Lucía', 'Jiménez', '22334455B', '20-22334455-2'),
('Santiago', 'Molina', '33445566C', '20-33445566-3'),
('Valeria', 'Silva', '44556677D', '20-44556677-4'),
('Pedro', 'Ruiz', '55667788E', '20-55667788-5'),
('Camila', 'Torres', '66778899F', '20-66778899-6'),
('Gabriel', 'Vega', '77889900G', '20-77889900-7'),
('Daniela', 'Ramos', '88990011H', '20-88990011-8'),
('Rodrigo', 'Cruz', '99001122I', '20-99001122-9'),
('Isabel', 'Moreno', '00112233J', '20-00112233-0');

-- Insertar datos en la tabla Curso
INSERT INTO Curso (nombre, descripcion, turno, cupos_maximos, docente_id) VALUES 
('Matemáticas Avanzadas', 'Curso avanzado de matemáticas', 'Mañana', 30, 1),
('Historia del Arte', 'Curso sobre la historia del arte', 'Tarde', 25, 2),
('Programación en Python', 'Curso de introducción a la programación en Python', 'Noche', 20, 3);

-- Insertar datos en la tabla Inscripcion
INSERT INTO Inscripcion (alumno_id, curso_id, fecha_inscripcion) VALUES 
(1, 1, '2024-01-10'),
(2, 1, '2024-01-11'),
(3, 1, '2024-01-12'),
(4, 2, '2024-01-13'),
(5, 2, '2024-01-14'),
(6, 2, '2024-01-15'),
(7, 3, '2024-01-16'),
(8, 3, '2024-01-17'),
(9, 3, '2024-01-18'),
(10, 3, '2024-01-19');