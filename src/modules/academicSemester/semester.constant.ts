import {
  TMonths,
  TSemesterCode,
  TSemesterName,
  TSemesterNameCodeMapper,
} from './semester.interface';

export const Months: TMonths[] = [
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

export const SemesterNames: TSemesterName[] = [
  'Summer',
  'Fall',
  'Winter',
  'Autumn',
];
export const SemesterCode: TSemesterCode[] = ['01', '02', '03', '04'];

export const semesterNameCodeMapper: TSemesterNameCodeMapper = {
  Summer: '01',
  Fall: '02',
  Winter: '03',
  Autumn: '04',
};
