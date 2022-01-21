const yup = require('yup');

const userStoreSchema = yup.object().shape({
  name: yup.string().required(),
  role: yup.string().required(),
  email: yup.string().email().required(),
  status: yup.boolean().required(),
});

const validate = () => async (req, res, next) => {
  try {
    await userStoreSchema.validate({
      ...req.body,
    });
    return next();
  } catch (error) {
    return res.status(400).send({ error: error.name, errors: error.errors });
  }
};

module.exports = validate;
