import express from 'express';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handle-validation';
import create from '../constrollers/employment';

const employmentRouter = express.Router();

employmentRouter.post('/', validator('create-employment'), handleValidation, create);

export default employmentRouter;
