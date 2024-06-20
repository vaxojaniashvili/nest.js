import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      { id: 1, name: 'vaxo', email: 'vaxo@gmail.com' },
      { id: 2, name: 'nika', email: 'nika@gmail.com' },
    ];
  }
}
