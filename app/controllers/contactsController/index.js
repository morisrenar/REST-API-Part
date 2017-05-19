var base = process.env.PWD;
var Contact = require(base + '/app/models/contactsModel');

var getContacts = (req, res) => {
    Contact.find((err, contacts) => {
        if(err) res.send(500, {'err': err});
        res.send(200, contacts);
    });
};

var getContact = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if(err) res.send(500, {'err': err});
        res.send(200, contact);
    });
};

var createContact = (req, res) => {
    var newContact = new Contact(req.body);

    newContact.save((err, savedContact) => {
        if(err) res.send(500, {'err': err});
        res.send(200, savedContact);
    });
};

var updateContact = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if(err) res.send(500, {'err': err});

        if(req.body.personName) contact.personName = req.body.personName;
        if(req.body.personNumber) contact.personNumber = req.body.personNumber;

        contact.save((err, updatedContact) => {
            if(err) res.send(500, {'err': err});
            res.send(200, updatedContact);
        });
    });
};

var removeContact = (req, res) => {
    Contact.findByIdAndRemove(req.params.id, (err, deletedContact) => {
        if(err) { res.send(500, {'success': false }); }
        res.send(200, { 'success': true });
    });
};

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    removeContact
};