require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { errorHandler } = require('./src/utils/errorHandlers'); // Adjust the path accordingly
const routes = require('./src/routes/paymentRoutes');
const customerRoutes = require('./src/routes/customerRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/payments', routes);
app.use('/api', customerRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
