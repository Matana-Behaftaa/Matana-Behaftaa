import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CreateCostumerDto } from './DTOs/CreateCostumerDto';


@Controller('costumer')
export class CostumerController {
    constructor(
        private readonly costumerService: CostumerService
    ) {}

    @Post()
    async create(@Body() newCustomer: CreateCostumerDto) {
        const result = await this.costumerService.create(newCustomer);
        return result;
    }

    @Get()
    async getAll() {
        const result = await this.costumerService.findAll();
        return result;
    }


    @Get()
    async getById(@Query("id") id: number) {
        const result = await this.costumerService.findById(id);
        return result;
    }
}
