import { Module } from '@nestjs/common';
import { TaskType3Controller } from './task-type3.controller';
import { TaskType3Service } from './task-type3.service';

@Module({
  controllers: [TaskType3Controller],
  providers: [TaskType3Service],
})
export class TaskType3Module {}
