import pool from '../db/database.js';

const getAllPersonas = async () => {
  try {
    const result = await pool.query('SELECT * FROM Persona');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getPersonaById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM Persona WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const createPersona = async (personaData) => {
  const { nombres, apellidos, edad, sexo, direccion, telefono, correo, tipo_sangre, fecha_nacimiento, estado_civil, ocupacion, religion, localidad, tipo_persona, clave } = personaData;
  try {
    const result = await pool.query(
      'INSERT INTO Persona (nombres, apellidos, edad, sexo, direccion, telefono, correo, tipo_sangre, fecha_nacimiento, estado_civil, ocupacion, religion, localidad, tipo_persona, clave) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *',
      [nombres, apellidos, edad, sexo, direccion, telefono, correo, tipo_sangre, fecha_nacimiento, estado_civil, ocupacion, religion, localidad, tipo_persona, clave]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updatePersona = async (id, personaData) => {
  const { nombres, apellidos, edad, sexo, direccion, telefono, correo, tipo_sangre, fecha_nacimiento, estado_civil, ocupacion, religion, localidad, tipo_persona, clave } = personaData;
  try {
    const result = await pool.query(
      'UPDATE Persona SET nombres = $1, apellidos = $2, edad = $3, sexo = $4, direccion = $5, telefono = $6, correo = $7, tipo_sangre = $8, fecha_nacimiento = $9, estado_civil = $10, ocupacion = $11, religion = $12, localidad = $13, tipo_persona = $14, clave = $15 WHERE id = $16 RETURNING *',
      [nombres, apellidos, edad, sexo, direccion, telefono, correo, tipo_sangre, fecha_nacimiento, estado_civil, ocupacion, religion, localidad, tipo_persona, clave, id]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deletePersona = async (id) => {
  try {
    const result = await pool.query('DELETE FROM Persona WHERE id = $1', [id]);
    return result.rowCount > 0; 
  } catch (error) {
    throw error;
  }
};

export {
  getAllPersonas,
  getPersonaById,
  createPersona,
  updatePersona,
  deletePersona,
};
