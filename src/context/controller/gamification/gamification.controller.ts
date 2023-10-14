import { GamificationService } from 'src/context/service';
import { Controller, Get, Headers, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';
import { UserDto } from 'src/view/dto';

@ApiTags('Gamification')
@Controller('/Gamification')
export class GamificationController {
  constructor(private readonly service: GamificationService) {}

  @ApiOperation({
    summary: 'Route to create a user score based on carbon emissions',
  })
  @UseInterceptors(SuccessInterceptor)
  @Get('/')
  async getGamification(@Headers() input: UserDto) {
    return await this.service.getGamification(input);
  }
}
