import mongoose from 'mongoose';

(async () => {
    try {
        const mongooseOptions = {
            dbName: process.env.DB_NAME,
            auth: {
                username: process.env.DB_USER,
                password: process.env.DB_PASW
            }
        };
        //const db = mongoose.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PORT}`, mongooseOptions);
        const db = mongoose.connect(`mongodb+srv://${process.env.DB_HOST}`, mongooseOptions);
        console.log('Database is connected: ', (await db).connection.name);
    } catch (error) {
        console.error(error);
    }
})();