import { boolean, z } from 'zod';

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'password should be less than 20 characters' }),
  needsPasswordChange: boolean().default(true).optional(),
  role: z.enum(['student', 'faculty', 'admin']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().default(false).optional(),
});

export const UserValidation = {
  userValidationSchema,
};
