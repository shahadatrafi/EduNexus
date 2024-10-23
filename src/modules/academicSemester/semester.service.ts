import { semesterNameCodeMapper } from './semester.constant';
import { TSemester } from './semester.interface';
import { AcademicSemester } from './semester.model';

const createSemesterIntoDB = async (semesterData: TSemester) => {
  // Validation checking for Semester Name === Code
  if (semesterNameCodeMapper[semesterData.name] !== semesterData.code) {
    throw new Error(
      `Invalid Semester code. For ${semesterData.name} code should be ${semesterNameCodeMapper[semesterData.name]}`,
    );
  }

  const result = await AcademicSemester.create(semesterData);
  return result;
};

const findAllSemesterIntoDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const findSingleSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });
  return result;
};

export const SemesterServices = {
  createSemesterIntoDB,
  findAllSemesterIntoDB,
  findSingleSemesterIntoDB,
};
