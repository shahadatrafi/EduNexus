export type TSemesterName = 'Summer' | 'Fall' | 'Winter' | 'Autumn';

export type TSemesterCode = '01' | '02' | '03' | '04';

export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TSemester = {
  name: TSemesterName;
  year: string;
  code: TSemesterCode;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TSemesterNameCodeMapper = {
  [key: string]: string;
};
