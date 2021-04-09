const mongoose = require('mongoose');
const config = require('config');


const dbcon = config.get('mongoDBConnection');

const connectDB = async() => {
    try {
        await mongoose.connect(dbcon, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('database connected');
    } catch (err) {
        console.log(err);
        console.log('unable to connect');
        process.exit();
    }
};

module.exports = connectDB;