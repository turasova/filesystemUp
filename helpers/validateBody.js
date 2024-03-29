import HttpError from "#helpers/HttpError.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);

    console.log(error);

    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
