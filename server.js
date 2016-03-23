const express = require('express');
const app = express();

app.use(express.static('static'));
app.use(express.static('dist'));

app.listen(process.env.EXPRESS_PORT, () => console.log('💻'));
