const express = require('express');
const graphqlHTTP = require('express-graphql');
// cors allows the communication between 2 different servers
const cors = require('cors');
const schema = require('./schema');

const app = express();

// allow cross-origin using cors as a middleware
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
