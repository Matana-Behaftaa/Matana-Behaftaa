import { Costumer } from 'src/database/entities/costumer.entity';
import { CreateCostumerDto } from './DTOs/CreateCostumerDto';
export declare class CostumerService {
    private costumerRepository;
    constructor(costumerRepository: typeof Costumer);
    create(createCostumerDto: CreateCostumerDto): Promise<Costumer>;
    findAll(): Promise<Costumer[]>;
    findById(id: number): Promise<Costumer>;
}
