import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUM_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8888,
        },
      },
    ]),
    ScheduleModule.forRoot(),
  ],
  providers: [TasksService],
})
export class TasksModule {}
