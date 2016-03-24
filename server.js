const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
    res.json({
        notes: [
            {
                name: 'films',
                text: 'Films to watch'
            },
            {
                name: 'books',
                text: 'Books to read'
            }
        ]
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static('dist'));

app.listen(process.env.EXPRESS_PORT, () => {
    console.log('💻');
});
