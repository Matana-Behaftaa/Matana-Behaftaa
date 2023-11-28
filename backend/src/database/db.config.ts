import { SequelizeOptions } from 'sequelize-typescript';
import { Costumer } from './entities/costumer.entity';
import { parse } from 'path';



const DBConnectionObject: SequelizeOptions = {
    dialect: 'mysql',
    host: process.env.DB_HOST,  //'localhost'
    port: parseInt(process.env.DB_PORT),  //3306
    username: process.env.DB_USER,  //'root'
    password:  process.env.DB_PASSWORD, //'your_gay_password'
    database:  process.env.DB_NAME //'your_gay_db_name'
};

const DBModelsArray = [
    Costumer
];

export default {
    DBConnectionObject,
    DBModelsArray,
};
