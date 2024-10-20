import { Student } from './student.model';

// const createStudentIntoDB = async (studentData: TStudent) => {
//   // using static method

//   if (await Student.isUserExists(studentData.id)) {
//     throw new Error('User already exist....!');
//   }

//   const result = await Student.create(studentData); //built in static method

//   // // using instance method
//   // const student = new Student(studentData); // creating instance

//   // if(await student.isUserExists(studentData.id)){
//   //   throw new Error('User already exist....!');
//   // }

//   // const result = await student.save(); //built in static method

//   return result;
// };

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getOneStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });

  const result = await Student.aggregate([{ $match: { id: id } }]);

  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getOneStudentFromDB,
  deleteStudentFromDB,
};
