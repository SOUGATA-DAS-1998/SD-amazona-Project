import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000; // Here the process.env.PORT convention is to access to the free Ports

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
