import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CostumerModule } from './costumer/costumer.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/db.module';

@Module({
  imports: [CostumerModule, DatabaseModule, SequelizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
