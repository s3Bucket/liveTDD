const request = require('supertest');
const server = require('../server');

it('should list 20 user', async() => {
  //Arrange
    const endpoint = '/users'
  //Act
    const res = await request(server).get(endpoint);
  //Assert
    expect(res.body.length).toEqual(20)
});

it('should return status code 200', async() => {
  //Arrange
    const endpoint = '/users'
  //Act
    const res = await request(server).get(endpoint);
  //Assert
    expect(res.statusCode).toEqual(200)
});