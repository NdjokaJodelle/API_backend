const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Routes CRUD
router.get('/', contactController.getAllContacts);
router.get('/search', contactController.searchContacts);
router.get('/:id', contactController.getContactById);
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
