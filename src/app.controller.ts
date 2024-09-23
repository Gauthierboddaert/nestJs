import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(@Req() request: Request): string {
    console.log('Request URL: ', request);
    return this.appService.getHello();
  }
}
