import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  gettaskType1(): string {
    const now = new Date();
    this.logger.log(
      `new request recieved at [${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`,
    );
    return 'gettaskType1 function called';
  }

  gettaskType2(): string {
    const now = new Date();
    this.logger.log(
      `new request recieved at [${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`,
    );
    return 'gettaskType2 function called';
  }

  gettaskType3(): string {
    const now = new Date();
    this.logger.log(
      `new request recieved at [${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`,
    );
    return 'gettaskType3 function called';
  }
}
