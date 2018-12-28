import check from 'express-validator/check';

/**
 * Validator function that handles all the validation of input requests on this api
 * @param {String} method - A string specifying the validator set to be used
 * @returns {Array} - An array of express validator objects
 */
const validator = (method) => {
  switch (method) {
    case 'create-rumor': {
      return [
        check.body('title', 'A valid title is required').exists()
          .isString().isLength({ min: 5, max: 30 }),
        check.body('content', 'A valid content is required. Minimum of 40 characters required.').exists()
          .isString().isLength({ min: 40, max: 1000 }),
      ];
    }
    case 'update-rumor': {
      return [
        check.body('title', 'A valid title is required').optional()
          .isString().isLength({ min: 5, max: 30 }),
        check.body('content', 'A valid content is required. Minimum of 40 characters required.').optional()
          .isString().isLength({ min: 40, max: 1000 }),
      ];
    }
    case 'create-employment': {
      return [
        check.body('title', 'A valid title is required').exists()
          .isString().isLength({ min: 5, max: 30 }),
        check.body('description', 'A valid description is required. Minimum of 40 characters required.').exists()
          .isString().isLength({ min: 40, max: 1000 }),
        check.body('email', 'A valid email is required').optional()
          .isEmail().isLength({ min: 5, max: 20 }),
        check.body('image', 'A valid image is required').optional()
          .isString().isLength({ min: 300 }),
      ];
    }
    default: {
      return [];
    }
  }
};

export default validator;
