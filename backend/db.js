import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('myapp', 'root', 'gold0501', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
