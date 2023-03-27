import { Controller, Get } from '@nestjs/common';
import { TaskType1Service } from './task-type1.service';

@Controller('task-type1')
export class TaskType1Controller {
  constructor(private readonly taskType1Service: TaskType1Service) {}

  @Get()
  processRequest(): string {
    return this.taskType1Service.processRequest();
  }
}
