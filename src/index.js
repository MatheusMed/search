const express = require('express');
const googleIt = require('google-it');

const app = express();

const port = 3000;

app.get('/search', async (req, res) => {
  const query = req.query.query;

  try {
    const results = await googleIt({ query });


    res.status(200).json(results);


  } catch (error) {
    console.error('Error ao pesquisar no google', error);

    res.status(500).json({ error: 'Error interno' });
  }
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
