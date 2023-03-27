import { Controller, Get } from '@nestjs/common';
import { TaskType3Service } from './task-type3.service';

@Controller('task-type3')
export class TaskType3Controller {
  constructor(private readonly taskType1Service: TaskType3Service) {}

  @Get()
  processRequest(): string {
    return this.taskType1Service.processRequest();
  }
}
