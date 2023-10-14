import { LoginService } from 'src/context/service';
import { Controller, Put, Body, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/view/dto';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';

@ApiTags('Login')
@Controller('/Login')
export class LoginController {
  constructor(private readonly service: LoginService) {}

  @ApiOperation({
    summary: 'Route to disconnect the user',
  })
  @UseInterceptors(SuccessInterceptor)
  @Put('/disconnect')
  async putDisconnect(@Body() input: LoginDto) {
    return await this.service.disconnectUser(input);
  }

  @ApiOperation({
    summary: 'Route to connect the user',
  })
  @UseInterceptors(SuccessInterceptor)
  @Put('/connect')
  async putConnect(@Body() input: LoginDto) {
    return await this.service.connectUser(input);
  }
}
