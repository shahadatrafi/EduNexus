import config from '../../config';
import { TStudent } from '../student/student.interface';
import { User } from './user.model';
import { TUser } from './user.interface';
import { Student } from '../student/student.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  // if password not given, using default password
  userData.password = password || (config.default_pass as string);

  //set role
  userData.role = 'student';

  // set a id manually
  userData.id = '202311001';

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
