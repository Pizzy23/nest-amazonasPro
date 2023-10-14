import { CreditService } from 'src/context/service';
import { Controller, Get, Headers, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';
import { UserDto } from 'src/view/dto';

@ApiTags('Credit')
@Controller('/Credit')
export class CreditController {
  constructor(private readonly service: CreditService) {}

  @ApiOperation({
    summary: 'Route to simulate user credit based on carbon emissions and score',
  })
  @UseInterceptors(SuccessInterceptor)
  @Get('/')
  async getCredit(@Headers() input: UserDto) {
    return await this.service.getCredit(input);
  }
}
