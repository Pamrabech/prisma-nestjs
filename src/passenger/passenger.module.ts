import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { AppService } from 'src/app.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({ 
  imports: [PrismaModule],
  controllers: [PassengerController],
  providers: [PassengerService, PrismaService],
  exports: [PassengerService],
})
export class PassengerModule {}
