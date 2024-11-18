import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic department created successfully',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentFormDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic departments retrieved successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFormDB(
      departmentId,
    );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Single academic department retrieved successfully ',
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const newAcademicDepartmentInfo = req.body;

  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentFormDB(
      departmentId,
      newAcademicDepartmentInfo,
    );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic department updated successfully',
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
