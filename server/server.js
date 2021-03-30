const express = require('express');
const path = require('path'); 
const cors = require('cors');
const apiRoutes  = require('./modules/api.js');
require('dotenv').config(); // Loads environment variables from a local .env file
//const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080

/* Application Settings*/
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(cookieParser());

/* Tells the application where public files like images, styling, and the minified javascript code lives */
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

/* Defines API endpoint routes prefixed with /api
+    - all routes inside will be: http:localhost:[PORT]/api/[your-defined-endpoint]
+*/
app.use('/api', apiRoutes); // API routes should be below '/api'

app.use(function (err, req, res, next) {
  status = err.status || 500
  message = err.message || 'Internal Server Error'
  console.error('[error] ' + err.stack)
  res.status(code).json({ status: status })

})

/* Start the server to listen on the defined port */
app.listen(port, () => {
  console.log('Server is running at localhost:' + port);
});

