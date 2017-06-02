'use strict'

// Setting test environment
process.env.ENV = 'unitTest';

// import packages
const chai      = require('chai');
// const chaiHttp  = require('chai-http');
const request = require('supertest-as-promised');  
const app    = require('../server');
const expect    = chai.expect;

// chai.use(chaiHttp);


describe('Marko Polo', () => {
/*
  * Test the Sequence Functionality
  */
  describe('/api/sequence', function () {
    describe('Test Cases', function () {
      it('Multiple Users', function () {

        return request(app)
        		.get('/api/sequence')
		      	.expect(200)
		    	.then(function(res) {
					expect(res.body).to.be.a('object');
					expect(res.body.status).to.equal('ok')
					// Make sure we can get the newly created task.
					return request(app).get('/api/sequence')
					  .expect(200);
				})
				.then(function(res) {
					expect(res.body).to.be.a('object');
					expect(res.body.status).to.equal('ok')
					return request(app).get('/api/sequence')
				  		.expect(200);
				})
				.then(function(res) {
					expect(res.body).to.be.a('object');
					expect(res.body.status).to.equal('ok')
					
				});
      }).timeout(10000);
    });   
  });
});