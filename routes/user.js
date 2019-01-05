import express from 'express';
import { create, signin } from '../constrollers/user';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handle-validation';

const userRouter = express.Router();

userRouter.post('/signup', validator('create-user'), handleValidation, create);
userRouter.post('/signin', validator('signin'), handleValidation, signin);
export default userRouter;
