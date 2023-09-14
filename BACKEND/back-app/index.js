import express from 'express';
import clientRouter from './Routes/clients-routes.js';
import projectRouter from './Routes/projects-routes.js';
import dotenv from 'dotenv';
import { connectDB } from './Config/db.js'
import cors from 'cors'
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3005;
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/clients", clientRouter)
app.use("/api/projects", projectRouter)

app.listen(PORT, console.log(`Server running on port ${PORT}`))