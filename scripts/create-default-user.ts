import { NestFactory } from '@nestjs/core';
import { hash } from 'bcrypt';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { AppModule } from '../src/app.module';
import { UserService } from '../src/user/user.service';

async function createDefaultUser(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const userService = app.get(UserService);

  userService.userModel.deleteMany();

  const defaultUser: CreateUserDto = {
    email: 'adrian@gmail.com',
    name: 'Adrian',
    password: 'casa',
  };

  if (defaultUser.password) {
    console.log(defaultUser.password);
    const hashedPassword = await hash(defaultUser.password, 10);
    defaultUser.password = hashedPassword;
  }

  await userService.createUser(defaultUser);
  console.log('Usuario creado:', defaultUser);

  await app.close();
}

createDefaultUser();
