import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const getStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'All Students Found successfully',
    data: result,
  });
});

const getOneStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getOneStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'The specific student found successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const result = await StudentServices.deleteStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getStudents,
  getOneStudent,
  deleteStudent,
};
