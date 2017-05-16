var base = process.env.PWD;
var dummyModel = require(base + '/app/models/dummyModel');  //if there is a database

var dummyRoute = (req, res) => {
    res.json(200, {
        success: true,
        message: 'Magic happens on port 3000'
    });
};

module.exports = {
    dummyRoute
};