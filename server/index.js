import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/users', (req, res) => {
  axios
    .get('https://randomuser.me/api/?page=1&results=10')
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(3000, () => console.log('🚀 Server started on port 3000'));
