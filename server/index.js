import express from 'express'


const PORT = 8080;

const app = express();

app.get('/', (_req, res) => {
  res.send('hello world...')
})

app.listen(PORT, () => {
  console.log('server has started...')
})
