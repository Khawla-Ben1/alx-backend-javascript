const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    countStudents(databaseFile)
    .then((studentData) => res.send(`This is the list of our students\n${studentData}`))
    .catch(() => {
      res.write('This is the list of our students\n');
      res.write('Cannot load the database');
      res.end();
    });
});

app.listen(port);
module.exports = app;
