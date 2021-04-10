exports.withErrorHandling = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
};
exports.methodNotAllowed = (req, res) => {
  res.status(405).send({ msg: "Method Not Allowed" });
};

exports.handleErrorSQL = (err, req, res, next) => {
  const errCode = ["22P02", "23502", "42703", "42P01", "23502"];
  //23502 this is for when you passed empty object
  //42703 this is for when you passed column name which will not exist into your table
  //23502 when violate null constraint
  if (errCode.includes(err.code)) {
    res.status(400).send({ msg: err.messege || "Bad Request" });
  }
  next(err);
};
exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status) res.status(err.status).send({ msg: err.msg });
  next(err);
};
