import { GamificationEntity, RegisterEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserDto } from 'src/view/dto';
@Injectable()
export class GamificationService {
  constructor(
    private repository: GamificationEntity,
    private userRepo: RegisterEntity,
  ) {}
  async getGamification(input: UserDto) {
    const user = await this.userRepo.getUser(input);
    const carbon = Math.floor(Number(user.Farm.Carbon));
    let resultScore;
    switch (carbon) {
      case 5:
        resultScore = 1;
        break;
      case 10:
        resultScore = 10;
        break;
      case 20:
        resultScore = 20;
        break;
      case 30:
        resultScore = 30;
        break;
      case 40:
        resultScore = 40;
        break;
      case 50:
        resultScore = 50;
        break;
      case 60:
        resultScore = 60;
        break;
      case 70:
        resultScore = 70;
        break;
      case 80:
        resultScore = 80;
        break;
      case 90:
        resultScore = 90;
        break;
      case 100:
        resultScore = 100;
        break;
      default:
        resultScore = 1;
        break;
    }
    const data = {
      uuid: input.uuid,
      score: resultScore,
    };
    await this.repository.updateGamification(data);
    return { res: 'Score aumentado :)', status: HttpStatus.OK };
  }
}
