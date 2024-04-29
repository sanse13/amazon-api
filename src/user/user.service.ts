import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) public userModel: Model<User>) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(userDto);
    return createUser.save();
  }

  async findOne(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
