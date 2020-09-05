import express from 'express';
import path from 'path';
import axios from 'axios';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/users', (req, res) => {
  axios
    .get('https://randomuser.me/api/?page=1&results=10')
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
