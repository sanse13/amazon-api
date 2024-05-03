import { Controller, Get, Query, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Request } from 'express';
import { assertIsDefined } from 'src/utils/shared-functions';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get user by email' })
  @Get('get-user')
  async getUserByEmail(@Query('email') email: string): Promise<UserDto> {
    const user = this.userService.findOne({ email });
    return plainToInstance(UserDto, user);
  }

  @ApiOperation({ summary: 'Get user' })
  @Get('user')
  async getUser(@Req() req: Request): Promise<UserDto> {
    const user = await this.userService.getLoggedUser(req);
    assertIsDefined(user, 'User not found');
    const profile = await this.userService.findOne({ _id: user._id });
    return plainToInstance(UserDto, profile);
  }
}
