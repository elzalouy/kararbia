import { toast } from "react-toastify";
export default function(handler) {
  return async e => {
    try {
      await handler(e);
    } catch (ex) {
      toast.warn(ex);
    }
  };
}
