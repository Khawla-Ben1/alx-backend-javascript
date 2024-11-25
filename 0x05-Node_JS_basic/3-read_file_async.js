const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const records = data.split('\n');

        const csField = {
          name: 'CS',
          list: [],
        };

        const sweField = {
          name: 'SWE',
          list: [],
        };

        const fields = [csField, sweField];

        for (const record of records) {
          if (record.trim() !== '') {
            const [student, , , field] = record.split(',');

            if (field === 'CS') {
              csField.list.push(` ${student}`);
            } else if (field === 'SWE') {
              sweField.list.push(` ${student}`);
            }
          }
        }

        fields[0].list[0] = fields[0].list[0].trim();
        fields[1].list[0] = fields[1].list[0].trim();

        console.log(`Number of students: ${fields[0].list.length + fields[1].list.length}`);
        console.log(`Number of students in ${fields[0].name}: ${fields[0].list.length}. List: ${fields[0].list}`);
        console.log(`Number of students in ${fields[1].name}: ${fields[1].list.length}. List: ${fields[1].list}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;
