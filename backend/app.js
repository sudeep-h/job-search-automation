const express=require('express');
const dotenv = require('dotenv');
const cors=require('cors');
const connectDb=require('./config/db');
const morgan = require('morgan');

dotenv.config();

connectDb();

const app=express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('App running');
})


const PORT=5001;
app.listen(PORT , ()=>{
    console.log(`Server running on ${PORT}`);
})
