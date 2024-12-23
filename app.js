const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Set port and start server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});


