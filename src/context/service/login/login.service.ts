import { LoginEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginDto } from 'src/view/dto';
@Injectable()
export class LoginService {
  constructor(private repository: LoginEntity) {}
  async connectUser(input: LoginDto) {
    try {
      await this.repository.updateConnect(input);
      return { res: 'Usuario conectado', status: HttpStatus.ACCEPTED };
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
  async disconnectUser(input: LoginDto) {
    try {
      await this.repository.updateDisconnect(input);
      return { res: 'Usuario desconectado', status: HttpStatus.ACCEPTED };
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
