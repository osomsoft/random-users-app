import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node Server</h1>');
});

app.listen(3000, () => console.log('🚀 Server started on port 3000'));
