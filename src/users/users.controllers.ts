import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/api')
export class UsersControllers {
  constructor(private readonly usersService: UsersService) {}
  @Get('/users')
  usersGet() {
    const users = this.usersService.getUsers();
    if (users) {
      return users;
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  @Get('/users/:id')
  getUserById(@Param('id', ParseIntPipe) id) {
    const user = this.usersService.getUserById(id);
    if (user) {
      return user;
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  @Post('/signup')
  signup(@Body() Body) {
    const user = this.usersService.signup(Body);
    if (user) {
      return user;
    } else {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
  }
  @Delete('/users/:id')
  deleteUser(@Param('id', ParseIntPipe) id) {
    const user = this.usersService.deleteUser(id);
    if (user) {
      return user;
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
