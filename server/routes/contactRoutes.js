// backend/contactRoutes.js
import express from 'express';

import contactController from '../controllers/contactController.js';
const router = express.Router();
// POST request to handle form submission
router.post('/contact', contactController.submitContactForm);

export default router;
