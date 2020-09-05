import express from 'express';
import path from 'path';
import axios from 'axios';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/users', (req, res) => {
  axios
    .get('https://randomuser.me/api/?page=1&results=10')
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(3000, () => console.log('🚀 Server started on port 3000'));
