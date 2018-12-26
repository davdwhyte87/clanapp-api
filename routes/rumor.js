import express from 'express';
import {
  create,
  getAll,
  getSingle,
  update,
} from '../constrollers/rumor';
import validator from '../helpers/validators';
import handleValidation from '../helpers/handle-validation';

const rumorRouter = express.Router();

rumorRouter.post('/', validator('create-rumor'), handleValidation, create);
rumorRouter.get('/', getAll);
rumorRouter.get('/:id', getSingle);
rumorRouter.patch('/:id', validator('update-rumor'), handleValidation, update);

export default rumorRouter;
