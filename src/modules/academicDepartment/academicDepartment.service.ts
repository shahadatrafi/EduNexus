import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (
  academicDepartmentInfo: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.create(academicDepartmentInfo);
  return result;
};

const getAllAcademicDepartmentFormDB = async () => {
  const result = await AcademicDepartment.find();
  return result;
};

const getSingleAcademicDepartmentFormDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};

const updateAcademicDepartmentFormDB = async (
  id: string,
  newAcademicDepartmentInfo: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    newAcademicDepartmentInfo,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFormDB,
  getSingleAcademicDepartmentFormDB,
  updateAcademicDepartmentFormDB,
};
