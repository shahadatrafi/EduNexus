import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SemesterServices } from './semester.service';

const createSemester = catchAsync(async (req, res) => {
  const result = await SemesterServices.createSemesterIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Semester created successfully',
    data: result,
  });
});

const findAllSemester = catchAsync(async(req, res)=>{

  const result = await SemesterServices.findAllSemesterIntoDB();

  sendResponse(res,{
    statusCode: StatusCodes.OK,
    success: true,
    message: "All semester fetched successfully",
    data: result
  })

})

export const SemesterControllers = {
  createSemester,
  findAllSemester
};
