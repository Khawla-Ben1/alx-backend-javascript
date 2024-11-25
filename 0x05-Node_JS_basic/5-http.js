const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];

    countStudents(databaseFile)
      .then((studentData) => {
        res.statusCode = 200;
        res.write('This is the list of our students\n');
        res.write(studentData);
        res.end();
      })
      .catch(() => {
        res.statusCode = 500;
        res.write('This is the list of our students\n');
        res.write('Cannot load the database');
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
