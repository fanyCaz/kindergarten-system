const sum = require('../public/javascripts/sum');
const request = require("supertest");
const app = require('../app');


describe("Testear la ruta principal", () => {
  test("Debe de responder al GET exitosamente", () => {
    return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
  });
});

/*
test('adds 1 + 1 equals 2', () =>{
  expect(sum(1,1)).toBe(2);
});
*/



