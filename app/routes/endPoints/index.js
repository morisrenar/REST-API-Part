var base = process.env.PWD;
var express = require('express');
var router = express.Router();
var contactsController = require(base + '/app/controllers/contactsController');

router.get('/contacts', contactsController.getContacts);
router.get('/contact/:id', contactsController.getContact);
router.post('/contact', contactsController.createContact);
router.put('/contact/:id', contactsController.updateContact);
router.delete('/contact/:id', contactsController.removeContact);

module.exports = router;