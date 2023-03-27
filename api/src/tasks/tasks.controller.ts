import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('taskType1')
  gettaskType1(): string {
    return this.tasksService.gettaskType1();
  }

  @Get('taskType2')
  gettaskType2(): string {
    return this.tasksService.gettaskType2();
  }

  @Get('taskType3')
  gettaskType3(): string {
    return this.tasksService.gettaskType3();
  }
}
