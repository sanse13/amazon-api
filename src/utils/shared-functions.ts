import { NotFoundException } from '@nestjs/common';
import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 3;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error al hashear la contraseña');
  }
};

type NonNullableLegacy<T> = T extends null | undefined ? never : T;

export function assertIsDefined<T>(
  value: T,
  message?: string,
): asserts value is NonNullableLegacy<T> {
  if (!value) {
    throw new NotFoundException(message || 'Variable not defined');
  }
}
