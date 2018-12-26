import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const sequelize = new Sequelize(process.env.DB_URL, { dialect: 'postgres', logging: false });

const Rumor = sequelize.define('rumor', {
  id: { type: Sequelize.BIGINT, allowNull: false, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  location: Sequelize.STRING,
  image: Sequelize.TEXT,
});

sequelize.sync();
export default Rumor;
