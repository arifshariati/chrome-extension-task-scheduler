import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    const now = new Date();
    this.logger.log(
      `new request recieved at [ ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} ]`,
    );
    return 'Hello World!';
  }
}
