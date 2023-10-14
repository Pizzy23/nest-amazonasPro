import { RegisterEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterDto, UserDto } from 'src/view/dto';
@Injectable()
export class RegisterService {
  constructor(private repository: RegisterEntity) {}
  async postRegister(input: RegisterDto) {
    try {
      await this.repository.firstRegister(input);
      return { res: 'Registrado com sucesso', status: HttpStatus.OK };
    } catch (e) {
      throw new HttpException(
        `Usuario ja cadastrado`,
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: new Error(e),
        },
      );
    }
  }
  async getUser(input: UserDto) {
    try {
      const res = await this.repository.getUser(input);
      return { res: res, status: HttpStatus.OK };
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
