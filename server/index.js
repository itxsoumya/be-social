import express from 'express'
import dotenv from 'dotenv'
import connect_database from './db/db.js'

dotenv.config();
const PORT = process.env.PORT;

connect_database();


const app = express();

app.get('/', (_req, res) => {
  res.send('hello world...')
})

app.listen(PORT, () => {
  console.log('server has started...')
})
