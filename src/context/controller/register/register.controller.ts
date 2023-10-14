import { RegisterService } from 'src/context/service';
import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from 'src/view/dto';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';

@ApiTags('Register')
@Controller('/Register')
export class RegisterController {
  constructor(private readonly service: RegisterService) {}

  @ApiOperation({
    summary: 'Router create base user',
  })
  @UseInterceptors(SuccessInterceptor)
  @Post('/')
  async postRegister(@Body() input: RegisterDto): Promise<void> {
    await this.service.postRegister(input);
  }
}
