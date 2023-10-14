import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { GamificationDto } from 'src/view/dto';

@Injectable()
export class GamificationEntity {
  constructor(private prisma: PrismaService) {}
  async updateGamification(input: GamificationDto) {
    const data = {
      Gamefication: {
        update: { Score: input.score },
      },
    };
    await this.prisma.user.update({
      where: { UUID: input.uuid },
      data: data,
    });
  }
}
