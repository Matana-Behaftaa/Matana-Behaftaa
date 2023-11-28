"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerController = void 0;
const common_1 = require("@nestjs/common");
const costumer_service_1 = require("./costumer.service");
const CreateCostumerDto_1 = require("./DTOs/CreateCostumerDto");
let CostumerController = class CostumerController {
    constructor(costumerService) {
        this.costumerService = costumerService;
    }
    async create(newCustomer) {
        const result = await this.costumerService.create(newCustomer);
        return result;
    }
    async getAll() {
        const result = await this.costumerService.findAll();
        return result;
    }
    async getById(id) {
        const result = await this.costumerService.findById(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCostumerDto_1.CreateCostumerDto]),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "getById", null);
CostumerController = __decorate([
    (0, common_1.Controller)('costumer'),
    __metadata("design:paramtypes", [costumer_service_1.CostumerService])
], CostumerController);
exports.CostumerController = CostumerController;
//# sourceMappingURL=costumer.controller.js.map