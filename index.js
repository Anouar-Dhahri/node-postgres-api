import express from 'express'
import cors from 'cors'

import { dbConnect } from './configs/queries.js'
import { router as userRouter } from './routes/users.routes.js'

const app = express()
const port = 5100

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/users', userRouter)

dbConnect();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server working on port ${port}!`))