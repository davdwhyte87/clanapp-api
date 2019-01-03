import express from 'express';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handle-validation';
import {
  create,
  update,
  getAll,
  getSingle,
  deleteEmployment,
} from '../constrollers/employment';

const employmentRouter = express.Router();

employmentRouter.post('/', validator('create-employment'), handleValidation, create);
employmentRouter.patch('/:id', validator('update-employment'), handleValidation, update);
employmentRouter.get('/', getAll);
employmentRouter.get('/:id', getSingle);
employmentRouter.delete('/:id', deleteEmployment);
export default employmentRouter;
