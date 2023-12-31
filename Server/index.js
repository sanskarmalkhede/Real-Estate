import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
    }
);

const app = express();


app.listen(3000, () => {
    console.log('Server listening on port 3000!');
    }
);

