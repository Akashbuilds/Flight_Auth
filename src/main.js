const express = require('express');

const bodyParser = require('body-parser');
const db = require('./models/index');   


const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');


const app = express();

const prepareAndStartServer = () => {
    app.listen(PORT, async() => {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        app.use('/api', apiRoutes);
        console.log(`Server started listening on PORT: ${PORT}`);

        if (process.env.DB_SYNC){
            db.sequelize.sync({alter : true});
        }

      
    });
}

prepareAndStartServer();