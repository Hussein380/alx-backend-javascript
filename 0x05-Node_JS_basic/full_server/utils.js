import fs from 'fs';

/**
 * Reads and parses the database file asynchronously.
 * @param {String} filePath - The path to the CSV database file.
 * @returns {Promise<Object>} - Resolves with an object of student data by field.
 */
export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const fields = lines[0].split(',').slice(-1)[0]; // Last field is the category (e.g., CS, SWE)
      const students = {};

      for (const line of lines.slice(1)) {
        const [firstname, , field] = line.split(',');
        if (field) {
          if (!students[field]) students[field] = [];
          students[field].push(firstname);
        }
      }
      resolve(students);
    });
  });
};

