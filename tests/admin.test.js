const sum = require('../public/javascripts/sum');
const request = require("supertest");
const server = request.agent('http://localhost:3000');
const app = require('../app');


//const app = require('../server') // Link to your server file
const supertest = require('supertest')
const req_super = supertest(app)

describe("Testear la ruta principal", () => {
  test("Debe de responder al GET exitosamente", () => {
    return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
  });
});

describe("Testear autentificacion", () => {
  test("Debe de responder con un 302 de FOUND, para redirigir a login", () => {
    return request(app)
        .get("/admin/schedule")
        .then(response => {
          expect(response.statusCode).toBe(302);
        });
  });
});

describe('get nino', function() {
    it('login', loginUser());
    it('returns view of unique child', function(done){
    server
        .get('/admin/info-nino/1')
        .expect(200)
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.text).toContain('Volver a niños');
        });
    });
});





/*
describe('GET /nino', function(){
    it('login', loginUser());
    it('uri that requires user to be logged in', function(done){
    server
        .get('admin/info-nino/1')
	    .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            console.log(res.body);
            done()
        });
    });
});

describe('POST /add-child', function(){
    it('login', loginUser());
    it('uri that requires user to be logged in', function(done){
    server
        .post('admin/add-child')
	    .send({'firstName':"Lalo"})
        .set('Accept', 'application/json')
        .end(function(err, res){
            if (err) return done(err);
            console.log(res);
            done()
        });
    });
});

*/





function loginUser() {
    return function(done) {
        server
            .post('/api/auth')
            .send({ username: 'example@example.com', password: 'password' })
            .expect(302)
            .expect('Location', '/admin/schedule')
            .end(onResponse);

        function onResponse(err, res) {
           if (err) return done(err);
           return done();
        }
    };
};



