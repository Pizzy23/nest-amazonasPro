import { CarbonEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CarbonDto } from 'src/view/dto';
@Injectable()
export class CarbonService {
  constructor(private repository: CarbonEntity) {}

  async updateCarbon(input: CarbonDto) {
    try {
      input.carbon = this.getPercentage(input);
      await this.repository.updateFarmer(input);
      return { res: 'Dados atualizados', status: HttpStatus.ACCEPTED };
    } catch (e) {
      throw new HttpException(
        'Generic Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: new Error(e),
        },
      );
    }
  }
  getPercentage(input: CarbonDto): number {
    return (input.carbon / input.area) * 100;
  }

  async setFarmDetails(input: CarbonDto) {
    try {
      await this.repository.updateFarmer(input);
      return { res: 'Dados atualizados', status: HttpStatus.ACCEPTED };
    } catch (e) {
      throw new HttpException(
        'Generic Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: new Error(e),
        },
      );
    }
  }
}
