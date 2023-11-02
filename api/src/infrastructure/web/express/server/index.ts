import express from 'express'
import router from './routes'
import cors from 'cors'
import postgresDb from '../../../property/sequelize/config/sequelize'
import path from 'path'

postgresDb()

const app = express()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use('/api', router)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
