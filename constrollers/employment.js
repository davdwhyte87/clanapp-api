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

const update = (req, res) => {
  const employmentId = req.params.id;
  Employment.findOne({ _id: employmentId }).exec()
    .then((employmentData) => {
      Employment.updateOne({ _id: employmentId }, {
        $set: {
          title: req.body.title || employmentData.title,
          description: req.body.description || employmentData.description,
          email: req.body.email || employmentData.email,
          image: req.body.image || employmentData.image,
        },
      }).exec().then(() => res.status(200).json({ status: 200, data: [{ id: employmentId, message: 'Employment updated!' }] }))
        .catch((error) => {
          console.log(error);
          res.status(400).json({ status: 400, error: 'An error occurred' });
        });
    }).catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

export { create, update };
