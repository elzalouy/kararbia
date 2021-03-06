import Joi from "joi-browser";
import { toast } from "react-toastify";

const ServicesSchema = {
  key: Joi.string().required().min(2),
  value: Joi.string().required().min(2),
};
export function validateServiceSchema(data) {
  try {
    const result = Joi.validate(data, ServicesSchema);
    if (!result.error) return null;
    return {
      key: result.error.details[0].context.key,
      message: result.error.details[0].message,
    };
  } catch (ex) {
    toast.warn(ex);
  }
}
