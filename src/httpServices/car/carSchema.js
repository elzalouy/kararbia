import Joi from "joi-browser";
import { toast } from "react-toastify";

const KeyValueSchema = {
  key: Joi.string()
    .required()
    .min(2)
    .max(25),
  value: Joi.string()
    .required()
    .min(2)
    .max(25)
};
const FeaturesSchema = {
  title: Joi.string()
    .min(2)
    .max(25)
    .required(),
  features: Joi.array()
    .required()
    .min(2)
    .max(12)
};
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
  extra_features: Joi.array()
    .min(1)
    .max(6)
    .required()
};
export function validateKeyValue(data) {
  try {
    const result = Joi.validate(data, KeyValueSchema);
    if (!result.error) return null;
    else
      return {
        key: result.error.details[0].context.label,
        message: result.error.details[0].message
      };
  } catch (ex) {
    toast.warn(ex);
  }
}
export function validateFeature(data) {
  const result = Joi.validate(data, FeaturesSchema);
  if (!result.error) return null;
  else
    return {
      key: result.error.details[0].context.label,
      message: result.error.details[0].message
    };
}
export function validateCar(data) {
  try {
    const result = Joi.validate(data, carSchema);
    if (!result.error) return null;
    return {
      key: result.error.details[0].context.label,
      message: result.error.details[0].message
    };
  } catch (ex) {
    toast.warn(ex);
  }
}
