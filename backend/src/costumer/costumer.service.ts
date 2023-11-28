import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Costumer } from 'src/database/entities/costumer.entity';
import { CreateCostumerDto } from './DTOs/CreateCostumerDto';


@Injectable()
export class CostumerService {
  constructor(
    @Inject('CUSTUMER_REPOSITORY')
    private costumerRepository: typeof Costumer,
  ) {}


  create(createCostumerDto: CreateCostumerDto) {
    return this.costumerRepository.create<Costumer>({...createCostumerDto});
  }


  findAll() {
    return this.costumerRepository.findAll();
  }

  findById(id: number) {
    return this.costumerRepository.findOne({
        where: {
            id: id
        }
    });
  }
}