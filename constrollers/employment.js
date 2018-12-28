import mongoose from 'mongoose';
import Employment from '../models/Employment';

const create = (req, res) => {
  const employment = Employment({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    email: req.body.email,
    image: req.body.image,
  });
  employment.save().then((employmentData) => {
    res.status(201).json({
      status: 201,
      data: [{ id: employmentData.id, message: 'Employment created' }],
    });
  })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

export default create;
