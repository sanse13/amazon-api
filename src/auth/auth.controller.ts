import { Body, Controller, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserDto } from '../user/dtos/user.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() signInDto: SignInDto): Promise<UserDto> {
    const loggedUser = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    return plainToInstance(UserDto, loggedUser);
  }
}
