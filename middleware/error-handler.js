const { customAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong. Try again." });
};

module.exports = errorHandlerMiddleware;
