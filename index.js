import express from 'express'
import { PORT } from './config'

const app = express()

app.get('/', (req, res) => {
  res.send('Helo World!')
})

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})
