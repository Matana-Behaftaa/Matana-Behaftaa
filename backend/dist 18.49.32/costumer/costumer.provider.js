"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costumerProviders = void 0;
const costumer_entity_1 = require("../database/entities/costumer.entity");
exports.costumerProviders = [
    {
        provide: 'CUSTUMER_REPOSITORY',
        useValue: costumer_entity_1.Costumer,
    },
];
//# sourceMappingURL=costumer.provider.js.map