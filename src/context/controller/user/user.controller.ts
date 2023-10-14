import { RegisterService } from 'src/context/service';
import { Controller, Get, Headers, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto, UserDto } from 'src/view/dto';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';

@ApiTags('User')
@Controller('/User')
export class UserController {
  constructor(private readonly service: RegisterService) {}

  @ApiOperation({
    summary: 'Router create base user',
  })
  @UseInterceptors(SuccessInterceptor)
  @Get('/')
  async getUser(@Headers() input: UserDto) {
    return await this.service.getUser(input);
  }
}
