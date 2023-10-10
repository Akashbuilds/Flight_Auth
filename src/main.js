const express = require('express');

const bodyParser = require('body-parser');


const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const app = express();

const prepareAndStartServer = () => {
    app.listen(PORT,() => {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        app.use('/api', apiRoutes);
        console.log(`Server started listening on PORT: ${PORT}`);
    });
}

prepareAndStartServer();