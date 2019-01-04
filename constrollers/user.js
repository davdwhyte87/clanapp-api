import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/User';

/**
 * This function creates a new user
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - response object
 */
const create = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    }
    const user = User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: hash,
      location: req.body.location,
    });
    user.save().then((userData) => {
      return res.status(201).json({
        status: 201,
        data: [{ id: userData.id, message: 'User created successfully' }],
      });
    })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({ status: 400, error: 'An error occurred' });
      });
  });
};

export default create;
