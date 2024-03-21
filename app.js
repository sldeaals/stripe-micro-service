require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { errorHandler } = require('./src/utils/errorHandlers'); // Adjust the path accordingly
const routes = require('./src/routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
