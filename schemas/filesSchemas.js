import Joi from "joi";

export const createFileSchema = Joi.object({
  fileName: Joi.string().required(),
  content: Joi.string().required(),
});
