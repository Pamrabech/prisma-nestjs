import { Prisma } from '@prisma/client';
import { Passenger } from '../entities/passenger.entity';

export class CreatePassengerDto extends Passenger {
    Nome: string;
    Email: string;
    Idade: number;
    createdAt?: Date | string;
    updatedAt?: Date | string ;
    voos?: Prisma.VooCreateNestedManyWithoutPassengerInput;
}
 