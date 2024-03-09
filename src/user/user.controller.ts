import { Controller, Get, Req } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(@Req() req: Request): Promise<UserDto> {
    const user = await this.userService.findOne({ _id: '1234' });

    return plainToInstance(UserDto, user);
  }
}
