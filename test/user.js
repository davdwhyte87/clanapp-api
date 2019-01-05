/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import User from '../models/User';

chai.use(chaiHttp);
const should = chai.should();

let exampleUserId = null;
let userToken = null;

before('Drop database', (done) => {
  User.remove({}, (err) => {
    if (err) {
      console.log(err);
    }
    done();
  });
});

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
  it('should signin a user  ', (done) => {
    const user = {
      email: 'kronng@gmail.com',
      password: '12345',
    };
    chai.request(app).post('/api/v1/auth/signin').send(user)
      .end((err, res) => {
        console.log(err);
        res.should.have.status(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        userToken = res.body.data[0].token;
        done();
      });
  });

  it('should not sign in a user with a bad password', (done) => {
    const user = {
      email: 'kronng@gmail.com',
      password: '12',
    };
    chai.request(app).post('/api/v1/auth/signin').send(user)
      .end((err, res) => {
        console.log(err);
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.should.be.a('object');
        done();
      });
  });

  it('should not sign in if a user account doesnt exist', (done) => {
    const user = {
      email: 'mergee67g@gmail.com',
      password: '12',
    };
    chai.request(app).post('/api/v1/auth/signin').send(user)
      .end((err, res) => {
        console.log(err);
        res.should.have.status(400);
        res.body.should.have.property('error');
        res.body.should.be.a('object');
        done();
      });
  });
});
