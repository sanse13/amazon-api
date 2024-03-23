import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
  private readonly users: UserDto[] = [
    {
      _id: '1',
      email: 'test@test.test',
      name: 'John',
      password: 'casa',
    },
    {
      _id: '2',
      email: 'defaultUser@test.test',
      name: 'Adrian',
      password: 'casa123',
    },
  ];

  async findOne(email: string): Promise<UserDto | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
