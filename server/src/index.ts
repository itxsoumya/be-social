import express, { Express, Request, Response } from "express";
import dbconnect from './db'
import router from "./routes";
import dotenv from 'dotenv'
dotenv.config()


dbconnect();
const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/', router)



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
