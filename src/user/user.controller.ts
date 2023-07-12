import { Controller, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('name')
  getName(@Body() body: any): string {
    return this.userService.getName(body);
  }
}
