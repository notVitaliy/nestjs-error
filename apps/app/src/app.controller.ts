import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('sum')
  sum(data: number[]): number {
    console.log('doing sums', { data });
    return (data || []).reduce((a, b) => a + b);
  }
}
