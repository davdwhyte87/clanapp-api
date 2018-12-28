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
      status: 201,
      data: [{ id: rumorData.id, message: 'Rumor created successfully' }],
    });
  })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

/**
 * This function gets all the rumors from the database
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - response object
 */
const getAll = (req, res) => {
  Rumor.find({}).exec().then((rumorData) => {
    res.status(200).json({ status: 200, data: rumorData });
  })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};

/**
 * Get single rumor
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @return {Object} - response object
 */
const getSingle = (req, res) => {
  const rumorId = req.params.id;
  Rumor.findOne({ _id: rumorId }).exec().then((rumorData) => {
    if (!rumorData) {
      res.status(404).json({ status: 404, error: 'This Rumor does not exist' });
    }
    res.status(200).json({ status: 200, data: rumorData });
  })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occurred' });
    });
};


/**
 * Update single rumor
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @return {Object} - response object
 */
const update = (req, res) => {
  const rumorId = req.params.id;
  Rumor.findOne({ _id: rumorId }).exec().then((rumorData) => {
    if (!rumorData) {
      res.status(404).json({ status: 404, error: 'This Rumor does not exist' });
    }
    Rumor.updateOne({ _id: rumorId }, {
      $set: {
        title: req.body.title || rumorData.title,
        content: req.body.content || rumorData.content,
        location: req.body.location || rumorData.location,
      },
    }).exec().then(() => res.status(200).json({ status: 200, data: [{ id: rumorId, message: 'Rumor updated!' }] }))
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


/**
 * Delete single rumor
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @return {Object} - response object
 */
const deleteRumor = (req, res) => {
  const rumorId = req.params.id;
  Rumor.findOne({ _id: rumorId }).exec().then((rumorData) => {
    if (!rumorData) {
      return res.status(404).json({ status: 404, error: 'This Rumor does not exist' });
    }
    Rumor.deleteOne({ _id: rumorId }).exec()
      .then(() => res.status(200).json({ status: 200, data: [{ _id: rumorId, message: 'Rumor deleted!' }] }))
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
  getAll,
  getSingle,
  update,
  deleteRumor,
};
