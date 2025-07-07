const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

// Set Content Security Policy
app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://ajax.googleapis.com; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self';"
    );
    next();
});



// Database connection setup
const pool = new Pool({
    user: 'Mina',
    host: 'localhost',
    database: 'hcs',
    password: 'Mina308!',
    port: 5432,
});

// Endpoint to fetch all Digimon
app.get('/digimon', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM digimon.digimon');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).send('Error fetching Digimon data.');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
