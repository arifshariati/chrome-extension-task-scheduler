import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TaskType2Service {
  private readonly logger = new Logger(TaskType2Service.name);

  processRequest(): string {
    const now = new Date();
    this.logger.log(
      `new request recieved at [${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`,
    );
    return 'Request processed';
  }
}
