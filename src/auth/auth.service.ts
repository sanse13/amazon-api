import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

interface JwtResponse {
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<JwtResponse> {
    const user = await this.userService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const jwtPayload = { sub: user._id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(jwtPayload),
    };
  }
}
