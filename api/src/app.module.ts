import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskType1Module } from './task-type1/task-type1.module';
import { TaskType2Module } from './task-type2/task-type2.module';
import { TaskType3Module } from './task-type3/task-type3.module';

@Module({
  imports: [TaskType1Module, TaskType2Module, TaskType3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
