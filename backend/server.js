import express from 'express';
import dotenv from 'dotenv'; 

import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
 const app = express();

 //so that data will be expressed in json
 app.use(express.json());
 app.use(express.urlencoded({extended: true})); //allow us to send form data

 app.use(cookieParser());
 
 app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
