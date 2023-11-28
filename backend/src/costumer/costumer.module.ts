import { Module } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';
import { Costumer } from 'src/database/entities/costumer.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/db.module';
import { costumerProviders } from './costumer.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CostumerController],
  providers: [
    CostumerService,
    ...costumerProviders
  ],
})
export class CostumerModule {}