import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Germán Node.js</h1>')
})

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})
