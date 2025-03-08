import express, { urlencoded } from 'express';
import connectDB from './lib/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
import router from './routes/route.js';


dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
const port = 3002;

app.use(express.json());
app.use(urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
});
