import { Controller, Get } from '@nestjs/common';
import { TaskType2Service } from './task-type2.service';

@Controller('task-type2')
export class TaskType2Controller {
  constructor(private readonly taskType1Service: TaskType2Service) {}

  @Get()
  processRequest(): string {
    return this.taskType1Service.processRequest();
  }
}
