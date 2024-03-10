import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

const DEFAULT_USER_EMAIL = 'defaultuser@test.test';

function generateUser(): User {
  return {
    name: 'Default',
    lastName: 'User',
    email: DEFAULT_USER_EMAIL,
    password: 'casa',
  };
}

const execute = async (): Promise<void> => {
  console.log('Executing...');
  const app = await NestFactory.createApplicationContext(AppModule);
};

void execute().then();
