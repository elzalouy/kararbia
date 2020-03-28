import Joi from "joi-browser";
import { toast } from "react-toastify";

const redisImageSchema = {
  title: Joi.string()
    .min(2)
    .max(64)
    .required(),
  link: Joi.string().allow(""),
  image: Joi.object()
};

export async function validateRedisImageItem(data) {
  try {
    const result = Joi.validate(data, redisImageSchema);
    if (!result.error) return null;
    return {
      key: result.error.details[0].context.key,
      message: result.error.details[0].message
    };
  } catch (ex) {
    toast.warn(ex);
  }
}
