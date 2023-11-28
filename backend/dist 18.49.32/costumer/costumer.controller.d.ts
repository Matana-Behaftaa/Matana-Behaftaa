import { CostumerService } from './costumer.service';
import { CreateCostumerDto } from './DTOs/CreateCostumerDto';
export declare class CostumerController {
    private readonly costumerService;
    constructor(costumerService: CostumerService);
    create(newCustomer: CreateCostumerDto): Promise<import("../database/entities/costumer.entity").Costumer>;
    getAll(): Promise<import("../database/entities/costumer.entity").Costumer[]>;
    getById(id: number): Promise<import("../database/entities/costumer.entity").Costumer>;
}
