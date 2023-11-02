import { Sequelize } from 'sequelize-typescript'
import PropertyModel from './PropertyModel'
import properties from './properties.json'

export default async function postgresDb() {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'root',
    password: 'toor',
    host: 'localhost',
    port: 5432,
    logging: false
  })

  try {
    await sequelize.authenticate()

    const databaseExists = await sequelize.query(
      "SELECT datname FROM pg_database WHERE datname = 'casanova'"
    )

    if (databaseExists[0].length === 0) {
      await sequelize.query('CREATE DATABASE casanova')
    }

    await sequelize.close()

    const db = new Sequelize({
      dialect: 'postgres',
      database: 'casanova',
      username: 'root',
      password: 'toor',
      host: 'localhost',
      port: 5432
    })

    db.addModels([PropertyModel])

    await db.sync({ alter: true, logging: false })

    const count = await PropertyModel.count()

    if (count === 0) {
      await PropertyModel.bulkCreate(properties)
    }
  } catch (error) {
    console.error('Error connecting to the database:', error)
  }
}
