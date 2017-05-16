process.env.NODE_ENV = 'test';

var base = process.env.PWD;
var config = require(base + '/config');
var logger = require('mocha-logger');
var mongoose  = require('mongoose');
var should = require('should');
var testUtils = require(base + '/Test/utils');

var User = require(base + '/app/models/userModel');
var dummyController = require(base + '/app/controllers/dummyController');

describe('BOILERPLATE TESTING', () => {

    before((done) => {
        mongoose.connect(config.database.dbTest, (err, user) => {
            if(err) { logger.log('Error in connecting database: ' + err) }
            else { done(); }
        });
    });

    describe('TESTING DUMMY ROUTE', () => {
        it('should get a success message', (done) => {
            var req = {};
            var res = testUtils.responseValidatorAsync(200, (user) => {
                user.should.have.property('success');
                user.success.should.equal(true);
                done();
            });
            dummyController.dummyRoute(req, res);
        });
    });


    after((done) => {
        mongoose.disconnect(done);
    });
});