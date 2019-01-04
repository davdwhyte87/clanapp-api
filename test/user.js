/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const should = chai.should();

let exampleUserId = null;

describe('User authentication', () => {
  it('should sign a user up ', (done) => {
    const user = {
      name: 'Dwayne',
      email: 'kronng@gmail.com',
      password: '12345',
    };
    chai.request(app).post('/api/v1/auth/signup').send(user)
      .end((err, res) => {
        console.log(err);
        res.should.have.status(201);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        exampleUserId = res.body.data[0].id;
        done();
      });
  });

  it('should not signup a user with bad request ', (done) => {
    const user = {
      name: 'Dwayne',
      email: 'kronng@gmail',
      password: '1',
    };
    chai.request(app).post('/api/v1/auth/signup').send(user)
      .end((err, res) => {
        console.log(err);
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.should.be.a('object');
        done();
      });
  });
});
