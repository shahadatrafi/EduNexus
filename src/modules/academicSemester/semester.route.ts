import { Router } from 'express';
import { SemesterControllers } from './semester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterValidations } from './semester.validation';

const router = Router();

router.post(
  '/create-semester',
  validateRequest(SemesterValidations.createSemesterValidationSchema),
  SemesterControllers.createSemester,
);

router.get('/', SemesterControllers.findAllSemester);
router.get('/:semesterId', SemesterControllers.findSingleSemester);

export const SemesterRoutes = router;
