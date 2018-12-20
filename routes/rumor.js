import express from 'express';
import create from '../constrollers/rumor';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handle-validation';

const rumorRouter = express.Router();

rumorRouter.post('/', validator('create-rumor'), handleValidation, create);

export default rumorRouter;
