const MONGODB_USER = 'sa';
const MONGODB_PASSWORD = 'melody039';
const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.32wdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: MONGODB_URI || process.env.MONGO_HOST || 
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
    (process.env.MONGO_PORT || '27017') + 
    '/mernproject'
}

export default config;