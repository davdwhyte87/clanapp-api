import Rumor from '../models/Rumor';
import createId from '../helpers/idGenerator';
/**
 * This function creates a new rumor
 * @param {Object} req - request object
 * @param {Object} res - respone object
 * @returns {Object} - response object
 */
const create = (req, res) => {
  Rumor.create({
    id: createId(),
    title: req.body.title,
    content: req.body.content,
    location: req.body.location,
    image: req.body.image,
  }).then((data) => {
    data.toJSON();
    res.status(201).json({ status: 201, data: [{ id: data.id, message: 'Rumor created!' }] });
  })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occured' });
    });
};


/**
 * This function gets all the rumors from the database
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - response object
 */
const getAll = (req, res) => {
  Rumor.findAll({ raw: true }).then((rumorData) => {
    res.status(200).json({ status: 200, data: rumorData });
  })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ status: 400, error: 'An error occured' });
    });
};
export { create, getAll };
