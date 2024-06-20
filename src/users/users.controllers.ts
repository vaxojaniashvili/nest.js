import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/api')
export class UsersControllers {
  constructor(private readonly usersService: UsersService) {}
  @Get('/users')
  usersGet() {
    return this.usersService.getUsers();
  }
}
