import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'user', timestamps: true, toJSON: { virtuals: true } })
export class User {
  @Prop({ trim: true, required: true })
  email!: string;

  @Prop({ trim: true, required: true })
  name!: string;

  @Prop({ trim: true, required: true })
  password!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
