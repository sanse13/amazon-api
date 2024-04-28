import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() signInDto: SignInDto): Promise<string> {
    const accessTokenResponse = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    return accessTokenResponse.access_token;
  }
}
