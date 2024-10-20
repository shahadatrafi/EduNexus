import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// will call controller
router.get('/', StudentControllers.getStudents);
router.get('/:studentId', StudentControllers.getOneStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
