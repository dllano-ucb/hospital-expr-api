import * as personaService from '../services/personaService.js';

const getAllPersonas = async (req, res) => {
  try {
    const personas = await personaService.getAllPersonas();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPersonaById = async (req, res) => {
  try {
    const persona = await personaService.getPersonaById(req.params.id);
    if (!persona) {
      return res.status(404).json({ message: 'Persona not found' });
    }
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add other controller functions for create, update, delete
const createPersona = async (req, res) => {
  try {
    const newPersona = await personaService.createPersona(req.body);
    res.status(201).json(newPersona); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePersona = async (req, res) => {
  try {
    const updatedPersona = await personaService.updatePersona(req.params.id, req.body);
    if (!updatedPersona) {
      return res.status(404).json({ message: 'Persona not found' });
    }
    res.json(updatedPersona);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePersona = async (req, res) => {
  try {
    const deletedPersona = await personaService.deletePersona(req.params.id);
    if (!deletedPersona) {
      return res.status(404).json({ message: 'Persona not found' });
    }
    res.json({ message: 'Persona deleted successfully' }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export {
  getAllPersonas,
  getPersonaById,
  createPersona,
  updatePersona,
  deletePersona,
};

