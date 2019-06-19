const dotenv = require('dotenv');
dotenv.config();

const dbconfig = {
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    connectionString: process.env.DBCONNECTIONSTRING
};

module.exports = {
    dbconfig
}