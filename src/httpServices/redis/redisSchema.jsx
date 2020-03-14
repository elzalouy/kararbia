import Joi from "joi-browser";

const ServicesSchema = {
  key: Joi.string()
    .required()
    .min(5)
    .max(70),
  value: Joi.object()
};

export async function validateServiceSchema(data) {
  const result = Joi.validate(data, ServicesSchema);
  if (!result.error) return null;
  return {
    key: result.error.details[0].context.key,
    message: result.error.details[0].message
  };
}
