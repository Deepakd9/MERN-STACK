import express from 'express';
import cors from 'cors';

import connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';

const app = express();

app.use(cors());
app.use('/', Route);

const PORT = 8000;

connection();

app.listen(PORT, ()=> console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();