const Tesseract = require('tesseract.js');

Tesseract.recognize('alex_id.jpg', 'eng')
  .then(({ data: { text } }) => {
    console.log(text);
  })
  .catch(err => {
    console.error(err);
  });