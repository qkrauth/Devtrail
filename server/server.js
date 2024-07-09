import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();
const corsOptions ={
  origin:process.env.FRONTEND_URL, 
  credentials:true,       
  optionSuccessStatus:200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => {
    res.send('up and running!');
  });

app.listen(port, () => console.log(`Server started on port ${port}`));
