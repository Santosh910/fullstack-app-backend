import express  from "express"
import morgan from "morgan";
import dotenv from 'dotenv';

import cors from 'cors'


const app = express();
dotenv.config();
app.use(morgan('dev'));
app.use(cors())
app.use(express.json())





app.get('/api/v1')

app.listen(8000,() => console.log ("database is connected on port 8000"))