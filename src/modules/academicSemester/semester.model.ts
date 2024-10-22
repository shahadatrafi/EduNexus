import { model, Schema } from 'mongoose';
import { TMonths, TSemester, TSemesterName } from './semester.interface';

const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const semesterNames: TSemesterName[] = ['Summer', 'Fall', 'Winter', 'Autumn'];

const semesterSchema = new Schema<TSemester>({
  name: {
    type: String,
    enum: semesterNames,
    require: true,
  },
  year: {
    type: Date,
    require: true,
  },
  code: {
    type: String,
    enum: ['01', '02', '03'],
    require: true,
  },
  startMonth: {
    type: String,
    enum: months,
  },
  endMonth: {
    type: String,
    enum: months,
  },
});

export const AcademicSemester = model<TSemester>(
  'AcademicSemester',
  semesterSchema,
);
