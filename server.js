import 'dotenv/config';
import express from 'express';
// import handlebars from 'express-handlebars';
import sequelize from './config/database.js';
import gigsRouter from './routes/gigs.js';
const PORT = process.env.PORT || 3500;
const app = express();

app.get('/', async (req, res) => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(error){
        console.log('Unable to connect to database:', error);
    }
    res.send('INDEX')
});
app.use('/gigs', gigsRouter);
app.listen(PORT, ()=> console.log(`Listening to port: ${PORT}`));