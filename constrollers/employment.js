import mongoose from 'mongoose';
import Employment from '../models/Employment';

/**
 * This code creates an employment
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @return {Object} - response object
 */
const create = (req, res) => {
  const employment = Employment({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    email: req.body.email,
    image: req.body.image,
  });
  employment.save().then((employmentData) => {
    return res.status(201).json({
      status: 201,
      data: [{ id: employmentData.id, message: 'Employment created' }],
    });
  })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

/**
 * This code updates a single employment
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @return {Object} - response object
 */
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
      }).exec().then(() => {
        return res.status(200).json({ status: 200, data: [{ id: employmentId, message: 'Employment updated!' }] });
      })
        .catch((error) => {
          console.log(error);
          return res.status(400).json({ status: 400, error: 'An error occurred' });
        });
    }).catch((error) => {
      console.log(error);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

/**
 * This function gets all the employments from the database
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - response object
 */
const getAll = (req, res) => {
  Employment.find({}).exec().then((rumorData) => {
    return res.status(200).json({ status: 200, data: rumorData });
  })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};


/**
 * Get single employment
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @return {Object} - response object
 */
const getSingle = (req, res) => {
  const rumorId = req.params.id;
  Employment.findOne({ _id: rumorId }).exec().then((rumorData) => {
    if (!rumorData) {
      return res.status(404).json({ status: 404, error: 'This Employment does not exist' });
    }
    res.status(200).json({ status: 200, data: rumorData });
  })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

/**
 * Delete single employment
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @return {Object} - response object
 */
const deleteEmployment = (req, res) => {
  const rumorId = req.params.id;
  Employment.findOne({ _id: rumorId }).exec().then((rumorData) => {
    if (!rumorData) {
      return res.status(404).json({ status: 404, error: 'This Employment does not exist' });
    }
    Employment.deleteOne({ _id: rumorId }).exec()
      .then(() => res.status(200).json({ status: 200, data: [{ _id: rumorId, message: 'Employment deleted!' }] }))
      .catch((error) => {
        console.log(error);
        return res.status(400).json({ status: 400, error: 'An error occurred' });
      });
  })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};


export {
  create,
  update,
  getSingle,
  getAll,
  deleteEmployment,
};
