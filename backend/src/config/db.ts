import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // make sure env variables are loaded

const sequelize = new Sequelize(
  process.env.PG_DATABASE!,   // Database name
  process.env.PG_USER!,       // Database username
  process.env.PG_PASSWORD!,   // Database password
  {
    host: process.env.PG_HOST || 'localhost',
    port: Number(process.env.PG_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // Aiven needs SSL
      },
    },
  }
);

export default sequelize;
