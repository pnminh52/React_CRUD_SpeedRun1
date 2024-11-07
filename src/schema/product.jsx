import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "required",
    "string.empty": "required",
  }),
  price: Joi.string().required().messages({
    "any.required": "required",
    "string.empty": "required",
  }),
  description: Joi.string().required().messages({
    "any.required": "required",
    "string.empty": "required",
  }),
});