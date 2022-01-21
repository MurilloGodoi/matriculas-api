const yup = require('yup');

const userUpdateCompleteSchema = yup.object({
  params: yup.object({
    id: yup.number().required(),
  }),
  body: yup.object({
    name: yup.string().required(),
    role: yup.string().required(),
    email: yup.string().email().required(),
    status: yup.boolean().required(),
  }),
});

const validate = () => async (req, res, next) => {
  try {
    await userUpdateCompleteSchema.validate({
      params: req.params,
      body: req.body,
    });
    return next();
  } catch (error) {
    return res.status(400).send({ error: error.name, errors: error.errors });
  }
};

module.exports = validate;
