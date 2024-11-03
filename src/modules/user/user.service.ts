import config from '../../config';
import { TStudent } from '../student/student.interface';
import { User } from './user.model';
import { TUser } from './user.interface';
import { Student } from '../student/student.model';
import { AcademicSemester } from '../academicSemester/semester.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  // if password not given, using default password
  userData.password = password || (config.default_pass as string);

  //set role
  userData.role = 'student';

  // find semester info
  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester,
  );

  // set a id manually
  userData.id = await generateStudentId(admissionSemester);

  // create a user
  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    // create New Student
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
