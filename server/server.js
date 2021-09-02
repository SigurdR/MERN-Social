import config from './../config/config';
import app from './express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${process.env.MONGODB_URI}`)
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.',process.env.PORT)
});