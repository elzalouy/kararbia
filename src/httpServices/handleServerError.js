module.exports = function(result) {
  if (result.response) {
    if (result.response.status === 401 && result.response.data.phone) {
      return { key: "phone", message: result.response.data.phone };
    }
    if (result.response.status === 400)
      return { key: "user error", message: result.response.data };
    if (result.response.status === 404)
      return { key: "server error", message: "server error" };
    if (result.response.status === 401)
      return {
        key: "unauthorized",
        message: result.response.data
      };
    if (result.response.status === 304) localStorage.removeItem("x-auth-token");
    if (result.response.status === 200) return null;
    if (result.response.status === 500)
      return {
        key: "server error",
        message: "May be the network is not established."
      };
    return {
      key: "network",
      message: "Error occured while connecting the server"
    };
  }
};
