import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'user', timestamps: true, toJSON: { virtuals: true } })
export class User {
  @Prop({ trim: true, required: true, unique: true, lowercase: true })
  email!: string;
  @Prop({ required: true }) password!: string;
  @Prop({ trim: true })
  name?: string;
  @Prop({ trim: true })
  lastName?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
