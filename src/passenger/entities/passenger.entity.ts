import {Prisma} from '@prisma/client';

export class Passenger implements Prisma.PassengerUncheckedCreateInput {

Nome: string;
Email: string;
Idade: number;
createdAt?: Date | string;
updatedAt?: Date | string ;
voos?: Prisma.VooUncheckedCreateNestedManyWithoutPassengerInput;

}