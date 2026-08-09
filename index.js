import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import userrouter from './routes/users.js';
const port = process.env.PORT;
app.use('/users', userrouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
