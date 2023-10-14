import { CarbonService } from 'src/context/service';
import { Controller, Post, Body, UseInterceptors, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarbonDto } from 'src/view/dto';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';

@ApiTags('Carbon')
@Controller('/Carbon')
export class CarbonController {
  constructor(private readonly service: CarbonService) {}

  @ApiOperation({
    summary: 'Route to update the area’s carbon emissions to percentage',
  })
  @UseInterceptors(SuccessInterceptor)
  @Put('/')
  async putCarbon(@Body() input: CarbonDto): Promise<void> {
    await this.service.updateCarbon(input);
  }
  @ApiOperation({
    summary: 'Route to update farm details',
  })
  @UseInterceptors(SuccessInterceptor)
  @Post('/')
  async postDetails(@Body() input: CarbonDto): Promise<void> {
    await this.service.setFarmDetails(input);
  }
}
