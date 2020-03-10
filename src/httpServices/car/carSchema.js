import Joi from "joi-browser";

const carSchema = {
  name: Joi.string()
    .required()
    .min(3)
    .max(64),
  model: Joi.string()
    .required()
    .min(1)
    .max(128),
  short_desc: Joi.string()
    .required()
    .min(10)
    .max(256),
  long_desc: Joi.string()
    .required()
    .min(50)
    .max(1000),
  kilometers: Joi.string()
    .required()
    .min(1)
    .max(10),
  body_type: Joi.string()
    .required()
    .min(1)
    .max(12),
  transmission: Joi.string()
    .required()
    .min(1)
    .max(20),
  color: Joi.string()
    .required()
    .min(1)
    .max(20),
  price: Joi.required(),
  speed: Joi.string()
    .required()
    .min(1)
    .max(64),
  doors: Joi.string()
    .required()
    .min(1)
    .max(64),
  fuel_type: Joi.string()
    .required()
    .min(1)
    .max(64),
  status: Joi.string()
    .required()
    .min(1)
    .max(64),
  extra_features: Joi.array().required()
};

export function validateCar(data) {
  const result = Joi.validate(data, carSchema);
  if (!result.error) return null;
  return {
    key: result.error.details[0].context.key,
    message: result.error.details[0].message
  };
}
