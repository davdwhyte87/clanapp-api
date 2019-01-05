/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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

/**
 * This function signs a user in
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - response object with the user id and a token
 */
const signin = async (req, res) => {
  let user;
  try {
    user = await User.findOne({ email: req.body.email }).select('+password').exec();
  } catch (error) {
    console.log(error);
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ status: 400, error: 'An error occurred' });
    }
    if (result) {
      const userData = user;
      const userToken = jwt.sign({
        id: userData._id,
      }, process.env.JWT_KEY, {
        expiresIn: '24h',
      });
      return res.status(200).json({
        status: 200,
        data: [{ id: userData.id, token: userToken }],
      });
    }
  });
};
export { create, signin };
