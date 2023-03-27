import { Module } from '@nestjs/common';
import { TaskType1Controller } from './task-type1.controller';
import { TaskType1Service } from './task-type1.service';

@Module({
  controllers: [TaskType1Controller],
  providers: [TaskType1Service],
})
export class TaskType1Module {}
