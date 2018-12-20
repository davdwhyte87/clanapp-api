import mongoose from 'mongoose';
import Rumor from '../models/Rumor';

/**
 * This function creates a new rumor
 * @param {Object} req - request object
 * @param {Object} res - respone object
 * @returns {Object} - response object
 */
const create = (req, res) => {
  const rumor = Rumor({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    location: req.body.location,
  });
  rumor.save().then((rumorData) => {
    res.status(201).json({
      status: 200,
      data: [{ id: rumorData.id, message: 'Rumor created successfully' }],
    });
  })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

export default create;
