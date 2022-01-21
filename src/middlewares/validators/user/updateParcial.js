const yup = require('yup');

const userUpdateParcialSchema = yup.object({
  params: yup.object({
    id: yup.number().required(),
  }),
  body: yup.object({
    name: yup.string(),
    role: yup.string(),
    email: yup.string().email(),
    status: yup.boolean(),
  }),
});

const validate = () => async (req, res, next) => {
  try {
    await userUpdateParcialSchema.validate({
      params: req.params,
      body: req.body,
    });
    return next();
  } catch (error) {
    return res.status(400).send({ error: error.name, errors: error.errors });
  }
};

module.exports = validate;
