import { firstValueFrom } from 'rxjs';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { ClientProxy } from '@nestjs/microservices';
import { CronJob } from 'cron';

@Injectable()
export class TasksService implements OnModuleInit {
  constructor(
    @Inject('SUM_SERVICE') private client: ClientProxy,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  onModuleInit() {
    const doSums = new CronJob('*/5 * * * * *', () => this.doSums());
    this.schedulerRegistry.addCronJob('getOsCreatedEvents', doSums);

    doSums.start();
  }

  async doSums() {
    const numbers = [];
    for (let i = 0; i < 20; i++) {
      const a = Math.random();
      const b = Math.random();

      numbers.push([a, b]);
    }

    const sums = await Promise.all(
      numbers.map((n) => firstValueFrom(this.client.send('sum', n))),
    );

    console.log({ sums });
  }
}
