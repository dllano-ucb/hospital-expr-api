CREATE TABLE Persona (     
	id SERIAL PRIMARY KEY,     
	nombres VARCHAR(150) not null,     
	apellidos VARCHAR(150) not null,     
	edad INT,     
	sexo VARCHAR(10),     
	direccion VARCHAR(100),     
	telefono VARCHAR(20),     
	correo VARCHAR(100) not null,     
	tipo_sangre VARCHAR(3),     
	fecha_nacimiento DATE,     
	estado_civil VARCHAR(20),     
	ocupacion VARCHAR(50),     
	religion VARCHAR(50),     
	localidad VARCHAR(100),      
	tipo_persona VARCHAR(20) not null,  
	clave VARCHAR(250) not null 
);