const express = require('express');
const app = express();
const PORT = 3456;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());

app.listen(PORT, (error) => {
  if (error) {
    console.log('failed to connect: ', error);
  } else {
    console.log(`connected to the server! listening at localhost:${PORT} :D`);
  }
})

app.get('/', (req, res) => {
  console.log('get route hit');
  res.send('success');
});

app.post('/', (req, res) => {
  console.log('post route hit');
  res.send();
});