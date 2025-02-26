const express = require('express');
const path = require('path');
const app = express();
const { readFile } = require('fs').promises;
const PORT = process.env.PORT || 3000;


// Serve the index.html file
app.get('/', async (request, response) => {
    response.send( await readFile('index.html', 'utf8') );
    
});

// Placeholder for MongoDB functionality (future implementation)
app.post('/reservations', (req, res) => {
    // Handle reservation data
    res.json({ message: 'Reservation submitted!' });
});

app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));
