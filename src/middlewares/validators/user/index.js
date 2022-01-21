const yup = require('yup');

const userIndexSchema = yup.object().shape({
  name: yup.string(),
  page: yup.number(),
});

const validate = () => async (req, res, next) => {
  try {
    await userIndexSchema.validate({
      ...req.query,
    });
    return next();
  } catch (error) {
    return res.status(400).send({ error: error.name, errors: error.errors });
  }
};

module.exports = validate;
