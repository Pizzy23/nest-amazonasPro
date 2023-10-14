import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { LoginDto } from 'src/view/dto';

@Injectable()
export class LoginEntity {
  constructor(private prisma: PrismaService) {}
  async updateConnect(input: LoginDto) {
    const data = {
      Login: {
        update: { Is_Logged: true },
      },
    };
    return await this.prisma.user.update({
      where: { UUID: input.uuid },
      data: data,
    });
  }
  async updateDisconnect(input: LoginDto) {
    const data = {
      Login: {
        update: { Is_Logged: false },
      },
    };
    return await this.prisma.user.update({
      where: { UUID: input.uuid },
      data: data,
    });
  }
}
