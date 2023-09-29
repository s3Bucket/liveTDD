const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

module.exports = app.get('/', async (request, response) => {
  response.send("Na bitte!")
});

module.exports = app.get('/users', async (request, response) => {
  let collection = await client.db('exampledb').collection('Users');
  let result = await collection.find({}).toArray();
  response.send(result);
});

app.post("/user", (req, res) => {
  const newUser = {
    name: req.body.name,
    phone: req.body.phone,
    Age: req.body.alter,
    address: req.body.address
  }

  client.db('exampledb').collection('Users').insertOne(newUser);
  res.send("Folgenden Benutzer erstellt: " + req.body.name);
});

app.delete("/users/:name", async(req, res) => {
  const query = {name: req.params.name};

  let collection = await client.db('exampledb').collection('Users');
  let result = await collection.deleteMany(query);

  res.send(result);
})


app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});