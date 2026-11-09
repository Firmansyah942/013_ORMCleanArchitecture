const db = require('../models');

async function connectDB() {
    try{
        await db.sequelize.authenticate();
        console.log('Database connected successfully');

        await db.sequelize.sync({alter: true});
        console.log('Database synchronized successfully');
    }catch(err){
        console.error('Database connection error', err.message);
        process.exit(1);
    }
}

module.export = connectDB;
