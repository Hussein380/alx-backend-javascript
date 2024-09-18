import { Router } from 'express';
import { AppController } from '../controllers/AppController.js';
import { StudentsController } from '../controllers/StudentsController.js';

const router = Router();

// Route to the homepage
router.get('/', AppController.getHomepage);

// Route to list all students
router.get('/students', StudentsController.getAllStudents);

// Route to list students by major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;

