import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/api')
export class UsersControllers {
  constructor(private readonly usersService: UsersService) {}
  @Get('/users')
  usersGet() {
    return this.usersService.getUsers();
  }
  @Get('/users/:id')
  getUserById(@Param('id') id) {
    return this.usersService.getUserById(id);
  }
  @Post('/signup')
  signup(@Body() Body) {
    return this.usersService.signup(Body);
  }
  @Delete('/users/:id')
  deleteUser(@Param() id) {
    return this.usersService.deleteUser(id);
  }
}
