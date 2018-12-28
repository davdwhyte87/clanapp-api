/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const should = chai.should();

let exampleEmploymentId = null;

describe('Create employment', () => {
  it('should create an employment', (done) => {
    const employment = {
      title: 'Php developer needed',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna
       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
       ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       Duis aute irure dolor in reprehenderit in voluptate velit esse
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      email: 'example@gmail.com',
    };
    chai.request(app).post('/api/v1/employments').send(employment).end((err, res) => {
      res.should.have.status(201);
      res.body.should.have.property('data');
      res.body.should.be.a('object');
      exampleEmploymentId = res.body.data[0].id;
      done();
    });
  });
  it('should create an employment', (done) => {
    const employment = {
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna
       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
       ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       Duis aute irure dolor in reprehenderit in voluptate velit esse
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      email: 'example@gmail.com',
    };
    chai.request(app).post('/api/v1/employments').send(employment).end((err, res) => {
      res.should.have.status(400);
      res.body.should.have.property('error');
      res.body.should.be.a('object');
      done();
    });
  });
});


describe('Employment update', () => {
  it('should update an employment', (done) => {
    const employment = { title: 'Laravel Junior developer' };
    chai.request(app).patch('/api/v1/employments/' + exampleEmploymentId).send(employment)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
  });
  it('should not update an employment with a wrong id', (done) => {
    const employment = { title: 'Laravel Junior developer' };
    chai.request(app).patch('/api/v1/employments/' + exampleEmploymentId + 90).send(employment)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.should.be.a('object');
        done();
      });
  });
});
