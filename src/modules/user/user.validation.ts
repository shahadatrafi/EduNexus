import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'password should be less than 20 characters' }),
});

export const UserValidation = {
  userValidationSchema,
};
