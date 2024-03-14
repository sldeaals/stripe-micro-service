const express = require('express');
const bodyParser = require('body-parser');
const { errorHandler } = require('./src/utils/errorHandlers'); // Adjust the path accordingly
// const routes = require('./src/routes/paymentRoutes');

const app = express();

app.use(bodyParser.json());
// app.use('/api/payments', routes);

// Custom error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
