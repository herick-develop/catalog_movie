import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller()
export class AppController {

  @ApiTags('Swagger')
  @Get()
  @ApiExcludeEndpoint()
  Swagger(@Res() res: Response): void {
    res.redirect('/api');
  }
}
