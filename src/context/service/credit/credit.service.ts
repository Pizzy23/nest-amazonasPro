import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterEntity } from 'src/context/entity';
import { UserDto } from 'src/view/dto';

@Injectable()
export class CreditService {
  constructor(private repository: RegisterEntity) {}
  async getCredit(input: UserDto) {
    const user = await this.repository.getUser(input);
    const scoreWeight = 0.5;
    const carbonWeight = 0.5;
    const carbon = Math.floor(Number(user.Farm.Carbon));
    const score = Math.floor(Number(user.Gamefication.Score));
    const totalScore = scoreWeight * score + carbonWeight * carbon;
    const creditAmount = Math.floor(totalScore / 100);
    let credit;
    switch (creditAmount) {
      case 10:
        credit = 1000;
        break;
      case 30:
        credit = 2000;
        break;
      case 40:
        credit = 3000;
        break;
      case 50:
        credit = 4000;
        break;
      case 60:
        credit = 5000;
        break;
      case 70:
        credit = 6000;
        break;
      case 80:
        credit = 7000;
        break;
      case 90:
        credit = 8000;
        break;
      case 100:
        credit = 9000;
        break;
      case 110:
        credit = 10000;
        break;
      default:
        credit = 20000;
        break;
    }
    return { res: credit, status: HttpStatus.OK };
  }
}
