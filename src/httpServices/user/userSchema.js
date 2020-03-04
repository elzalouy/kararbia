import Joi from "joi-browser";

const RegisterSchema = {
  name: Joi.string()
    .required()
    .min(2)
    .max(64),
  email: Joi.string()
    .required()
    .min(8)
    .max(256),
  phone: Joi.string().max(24),
  password: Joi.string()
    .required()
    .min(5)
    .max(1024),
  confirmPassword: Joi.string()
    .max(1024)
    .min(5)
    .required()
};

export async function validateRegister(data) {
  const result = Joi.validate(data, RegisterSchema);
  if (!result.error) return null;
  return {
    key: result.error.details[0].context.key,
    message: result.error.details[0].message
  };
}
