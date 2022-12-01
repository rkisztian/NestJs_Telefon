import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { TelefonDto } from './text-color.dto';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  root() {
    return {};
  }

  @Post()
  @Render('color')
  telefon(@Body() telefon: TelefonDto): object {
    return telefon;
  }
}
