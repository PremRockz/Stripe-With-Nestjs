import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('pay/success/checkout/session')
  paymentSuccess(@Res({ passthrough: true }) res ) {

    return this.appService.SuccessSession(res);

  }
}
