import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { CreditDto, RegisterDto, UserDto } from 'src/view/dto';

@Injectable()
export class RegisterEntity {
  constructor(private prisma: PrismaService) {}
  async firstRegister(input: RegisterDto) {
    const data = {
      UUID: input.uuid,
      Register: {
        create: {
          Name: input.name,
          Email: input.email,
        },
      },
      Login: {
        create: { Is_Logged: false },
      },
      Gamefication: {
        create: { Score: 0 },
      },
      Farm: {
        create: {
          Carbon: 0,
          PlantHealth: 0,
          Area: 0,
        },
      },
    };
    const user = await this.prisma.user.create({
      include: {
        Farm: true,
        Gamefication: true,
        Register: true,
        Login: true,
      },
      data,
    });
  }
  async getUser(input: UserDto ) {
    const user = await this.prisma.user.findFirst({
      where: { UUID: input.uuid },
      include: {
        Farm: true,
        Gamefication: true,
        Register: true,
        Login: true,
      },
    });
    return user;
  }
}
