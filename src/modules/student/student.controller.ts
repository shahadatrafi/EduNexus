import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'All Students Found successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getOneStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getOneStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'The specific student found successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getStudents,
  getOneStudent,
  deleteStudent,
};
