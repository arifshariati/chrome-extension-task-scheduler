import { Module } from '@nestjs/common';
import { TaskType2Controller } from './task-type2.controller';
import { TaskType2Service } from './task-type2.service';

@Module({
  controllers: [TaskType2Controller],
  providers: [TaskType2Service],
})
export class TaskType2Module {}
