import express from 'express';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handle-validation';
import { create, update } from '../constrollers/employment';

const employmentRouter = express.Router();

employmentRouter.post('/', validator('create-employment'), handleValidation, create);
employmentRouter.patch('/:id', validator('update-employment'), handleValidation, update);

export default employmentRouter;
