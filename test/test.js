import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'

chai.use(chaiHttp);
const should = chai.should();


describe('Primary tests', () => {
    it('should return hello message', (done) => {
        chai.request(app).get('/api/v1').end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
})
