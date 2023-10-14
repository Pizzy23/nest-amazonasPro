import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { CarbonDto } from 'src/view/dto';

@Injectable()
export class CarbonEntity {
  constructor(private prisma: PrismaService) {}
  async updateFarmer(input: CarbonDto) {
    const data = {
      Farm: {
        update: { Carbon: input.carbon, PlantHealth: input.plantHealth },
      },
    };
    await this.prisma.user.update({
      where: { UUID: input.uuid },
      data: data,
    });
  }
}
