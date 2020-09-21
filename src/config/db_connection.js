import config from '../database/database';
import Sequelize from 'sequelize';

const db = new Sequelize(config[process.env.DATABASE_URL || 'dev']);

export default db;