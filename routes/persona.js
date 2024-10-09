import express from 'express';
import * as personaController from '../controllers/personaController.js';

const router =
 express.Router();

router.get('/', personaController.getAllPersonas);
router.get('/:id', personaController.getPersonaById);
router.post('/', personaController.createPersona);
router.put('/:id', personaController.updatePersona);
router.delete('/:id', personaController.deletePersona);

export default router; // Export the router
