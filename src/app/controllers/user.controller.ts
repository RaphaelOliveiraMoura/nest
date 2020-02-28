import { Controller, Get } from '@nestjs/common';

import UserService from '../services/user.service';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index(): string[] {
    return this.userService.getAll();
  }
}
