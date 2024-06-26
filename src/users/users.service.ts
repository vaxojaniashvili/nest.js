import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserTypes } from 'src/types/common';

@Injectable()
export class UsersService {
  private readonly data = [
    { id: 1, name: 'vaxo', email: 'vaxo@gmail.com' },
    { id: 2, name: 'nika', email: 'nika@gmail.com' },
  ];
  getUsers() {
    return this.data;
  }
  getUserById(id: number) {
    const user = this.data.find((u) => u.id === id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      return user;
    }
  }
  signup(body: UserTypes) {
    const { name, email } = body;
    const createdTime = new Date().toLocaleString();
    const newUser = {
      id: this.data.length + 1,
      name: name,
      email: email,
      createdTime: createdTime,
    };
    if (!newUser) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
    if (name && email) {
      this.data.push(newUser);
    } else {
      throw new HttpException(
        'Please fill name and email veils',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.data;
  }
  deleteUser(id: number) {
    const deletedUser = this.data.filter((user) => user.id !== id);
    return deletedUser;
  }
}
