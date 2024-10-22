import { TSemester } from './semester.interface';
import { AcademicSemester } from './semester.model';

const createSemesterIntoDB = async (semesterData: TSemester) => {
  const result = await AcademicSemester.create(semesterData);
  return result;
};

export const SemesterServices = {
  createSemesterIntoDB,
};
