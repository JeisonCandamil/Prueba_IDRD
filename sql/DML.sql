INSERT INTO materiales (codigo, descripcion, unidad, precio) VALUES
('MAT001', 'Cemento Portland', 'Kg', 25000),
('MAT002', 'Ladrillo Rojo', 'Unidad', 600),
('MAT003', 'Arena de Río', 'M²', 45000),
('MAT004', 'Varilla de Acero', 'Unidad', 15000),
('MAT005', 'Madera Pino', 'M²', 35000);


INSERT INTO departamentos (nombre) VALUES
('Antioquia'),
('Cundinamarca'),
('Valle del Cauca'),
('Santander'),
('Atlántico');


INSERT INTO ciudades (nombre, departamento_id) VALUES
('Medellín', 1),
('Envigado', 1),
('Bogotá', 2),
('Chía', 2),
('Cali', 3),
('Palmira', 3),
('Bucaramanga', 4),
('Barranquilla', 5);


INSERT INTO proyectos (nombre, departamento_id, ciudad_id) VALUES
('Edificio Central', 1, 1),
('Centro Comercial Norte', 2, 3),
('Urbanización Sur', 3, 5),
('Hospital General', 4, 7),
('Puente Principal', 5, 8);


INSERT INTO asignacion_materiales (proyecto_id, material_id, cantidad) VALUES
(1, 1, 500), 
(1, 2, 1000), 
(2, 3, 20),  
(3, 4, 300), 
(4, 5, 50),  
(5, 1, 800),  
(5, 4, 500);  
