import Joi from "joi-browser";

const blogSchema = {
  _id: Joi.any(),
  blog: Joi.string()
    .required()
    .min(20)
};
export async function validateBlog(data) {
  const result = Joi.validate(data, blogSchema);
  if (!result.error) return null;
  else
    return {
      key: result.error.details[0].context.label,
      message: result.error.details[0].message
    };
}
