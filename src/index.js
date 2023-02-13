const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.all('*', (_req, res, _next) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT} ...`);
});
