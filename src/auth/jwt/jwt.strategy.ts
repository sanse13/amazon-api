import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  createParamDecorator,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    const extractJwtFromCookie = (req: Request): string => {
      let token = null;
      // eslint-disable-next-line
      if (req && req.cookies) {
        // eslint-disable-next-line
        token = req.cookies.access_token;
      }

      const accessToken =
        token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
      return accessToken;
    };

    super({
      jwtFromRequest: extractJwtFromCookie,
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: LocalJwtPayload): LocalJwtPayload {
    return payload;
  }
}

export interface LocalJwtPayload {
  sub: string;
  email: string;
}

export const UserJWTStrategy = createParamDecorator<
  LocalJwtPayload | undefined
>((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Express.Request>();
  return request.user;
});
