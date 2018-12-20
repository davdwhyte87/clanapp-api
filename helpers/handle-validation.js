import check from 'express-validator/check';
/**
 * This function checks for validation error and returns an error or allows the request process
 * to proceed to the controller
 * @param {Object} req - inccoming request object
 * @param {Object} res - response object
 * @param {Object} next - next object
 * @return {Object} res - response object
 */
async function handleValidation(req, res, next) {
  const errorFormatter = ({ msg }) => msg;
  const errors = check.validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 400, error: errors.array({ onlyFirstError: true }) });
  }
  next();
}
export default handleValidation;
