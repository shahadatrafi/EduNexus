import { model, Schema } from 'mongoose';
import { Months, SemesterCode, SemesterNames } from './semester.constant';
import { TSemester } from './semester.interface';

const semesterSchema = new Schema<TSemester>(
  {
    name: {
      type: String,
      enum: SemesterNames,
      require: true,
    },
    year: {
      type: String,
      require: true,
    },
    code: {
      type: String,
      enum: SemesterCode,
      require: true,
    },
    startMonth: {
      type: String,
      enum: Months,
      require: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<TSemester>(
  'AcademicSemester',
  semesterSchema,
);
