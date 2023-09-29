const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

module.exports = app.get('/users', async (request, response) => {
  let collection = await client.db('exampledb').collection('Users');
  let result = await collection.find({}).toArray();
  response.send(result);
});

app.listen(3000, () => {});