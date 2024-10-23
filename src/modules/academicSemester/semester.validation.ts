import { z } from 'zod';
import { Months, SemesterCode, SemesterNames } from './semester.constant';

const createSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...SemesterNames] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...SemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

const updateSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...SemesterNames] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...SemesterCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});

export const SemesterValidations = {
  createSemesterValidationSchema,
  updateSemesterValidationSchema,
};
