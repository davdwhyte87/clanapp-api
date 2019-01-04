import express from 'express';
import create from '../constrollers/user';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handle-validation';

const userRouter = express.Router();

userRouter.post('/signup', validator('create-user'), handleValidation, create);

export default userRouter;
