import Joi from "joi-browser";
import { toast } from "react-toastify";

const contactSchema = {
  name: Joi.string().min(2).required(),
  email: Joi.string().required(),
  subject: Joi.string().required().min(2).max(64),
  message: Joi.string().required().min(10),
};

export function validateContact(contact) {
  try {
    const result = Joi.validate(contact, contactSchema);
    if (!result.error) return null;
    return {
      key: result.error.details[0].context.key,
      message: result.error.details[0].message,
    };
  } catch (error) {
    toast.warn(error.message);
  }
}
