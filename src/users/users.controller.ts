import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

export interface User {
  id: number;
  name: string;
  email: string;
}
@Controller('/api')
export class UsersControllers {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/users/:id')
  getUserWithId(@Param('id') id: string) {
    return this.usersService.getUserWithId(id);
  }

  @Post('/signup')
  signup(@Body() body: User) {
    return this.usersService.signup(body);
  }

  @Delete("/users/:id")
  deleteUser(@Param("id") id){
    return this.usersService.deleteUser(id);
  }
}