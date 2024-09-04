


// Database connection setup
const pool = new Pool({
    user: 'Mina', // replace with your PostgreSQL username
    host: 'localhost',
    database: 'hcs',
    password: 'Mina308!', // replace with your PostgreSQL password
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

app.on('error', (err) => {
    if (err.code === 'ERR_CONNECTION_REFUSED') {
      console.error('Connection refused error:', err);
    } else {
      console.error('Error:', err);
    }
  });
