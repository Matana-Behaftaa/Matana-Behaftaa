"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const costumer_entity_1 = require("./entities/costumer.entity");
const DBConnectionObject = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Asd34215',
    database: 'ofir_db'
};
const DBModelsArray = [
    costumer_entity_1.Costumer
];
exports.default = {
    DBConnectionObject,
    DBModelsArray,
};
//# sourceMappingURL=db.config.js.map