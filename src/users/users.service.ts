import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './users.controller';

@Injectable()
export class UsersService {
  private readonly data = [
    { id: 1, name: 'nika', email: 'nika@gmail.com' },
    { id: 2, name: 'saba', email: 'saba@gmail.com' },
  ];

  getUsers() {
    return this.data;
  }

  getUserWithId(id: string) {
    const user = this.data.find((u) => u.id === parseInt(id));

    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  signup(body: User) {
    const { name, email } = body;
    const newUser = {
      id: this.data.length + 1,
      name: name,
      email: email,
    };
    if (!newUser) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    this.data.push(newUser);

    return this.data;
  }

  deleteUser(id: string) {
    const deleteUser = this.data.filter((u) => u.id !== Number(id));
    return deleteUser
  }
}
