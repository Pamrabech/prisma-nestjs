import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengerController } from './passenger/passenger.controller';
import { PassengerModule } from './passenger/passenger.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PassengerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
