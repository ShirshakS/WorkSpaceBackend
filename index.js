import express from "express";
const app = express();
import userrouter from './routes/users.js';

app.use('/users', userrouter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
