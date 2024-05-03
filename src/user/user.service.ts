import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LocalJwtPayload } from 'src/auth/jwt/jwt.strategy';
import { assertIsDefined } from 'src/utils/shared-functions';
import { StrictFilterQuery } from 'src/utils/types';
import { CreateUserDto } from './dtos/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) public userModel: Model<User>) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(userDto);
    return createUser.save();
  }

  async findOne(
    filter: StrictFilterQuery<UserDocument>,
  ): Promise<UserDocument | null> {
    return this.userModel.findOne(filter).exec();
  }

  async getLoggedUser(request: Express.Request): Promise<UserDocument | null> {
    const auth = request.user as LocalJwtPayload | undefined;
    assertIsDefined(auth, 'auth not defined');
    assertIsDefined(auth.sub, 'auth sub not defined');
    const loggedUser = await this.userModel.findOne({ _id: auth.sub }).exec();
    return loggedUser;
  }
}
