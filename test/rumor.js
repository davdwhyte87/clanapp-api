/* eslint-disable no-unused-vars */
/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const should = chai.should();


describe('Test for rumor features', () => {
  it('should create a rumor', (done) => {
    const rumor = {
      title: 'Tenni is NiNIs Sister',
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna
       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
       ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       Duis aute irure dolor in reprehenderit in voluptate velit esse
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
    };
    chai.request(app).post('/api/v1/rumors').send(rumor)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
  });
  it('should not create a rumor with wrong title and no comment', (done) => {
    const rumor = {
      title: 'Tr',
    };
    chai.request(app).post('/api/v1/rumors').send(rumor)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.should.be.a('object');
        done();
      });
  });
});
