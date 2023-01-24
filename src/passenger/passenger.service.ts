import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PassengerService {

constructor(private readonly prisma: PrismaService){}

  create(createPassengerDto: CreatePassengerDto) {
    return this.prisma.passenger.create({
      data: {
        ...createPassengerDto,

      }  
        });
  }

  findAll() {
    return this.prisma.passenger.findMany();
  }

  findOne(id: number) {
    return this.prisma.passenger.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePassengerDto: UpdatePassengerDto) {
    return this.prisma.passenger.update({
      where: { id },
      data: updatePassengerDto

    });
  }

  remove(id: number) {
    return this.prisma.passenger.delete ({
      where: { id },
    })
  }
}
