const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
