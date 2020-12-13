// Our server setup
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// registering the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

app.listen(4000, () => console.log("Thank you Shaun! Always watching... on port 4000"));
