const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser'); // Required to parse JSON bodies

app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// Expected credentials (replace with your actual credentials)
const expectedUsername = 'user';
const expectedPassword = 'password';

app.use('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === expectedUsername && password === expectedPassword) {
    res.send({
      token: 'test123'
    });
  } else {
    res.status(401).send({
      error: 'Invalid credentials'
    });
  }
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));