import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { UserService } from '../user/user.service';

describe('AuthController', () => {
  let controller: AuthController;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60d' },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService, UserService],
    }).compile();
  });

  beforeEach(async () => {
    controller = module.get(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a user DTO when valid credentials are provided', async () => {
    const signInDto = { email: 'test@example.com', password: 'password123' };

    jest.spyOn(module.get(AuthService), 'signIn').mockResolvedValue({
      access_token: 'ey1029384412lakshdf',
    });

    const result = await controller.signIn(signInDto);

    expect(result).toBeDefined();
  });

  it('should throw an error when invalid credentials are provided', async () => {
    const signInDto = {
      email: 'invalid@example.com',
      password: 'invalidPassword',
    };

    jest.spyOn(module.get(AuthService), 'signIn').mockImplementation(() => {
      throw new Error('Invalid credentials');
    });

    await expect(controller.signIn(signInDto)).rejects.toThrow(
      'Invalid credentials',
    );
  });
});
