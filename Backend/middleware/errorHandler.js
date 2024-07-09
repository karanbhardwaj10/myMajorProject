export const errorHandler = async (err, req, res, next) => {
  return res.sendStatus(400).send({
    message: err.message,
    status: err.status || 400
  });
};


export const validationHandler = (config) => (req, res, next) => {
  try {
    for (let i = 0; i < config.length; i++) {
      const value = req[config[i].from][config[i].name];

      if (!value && config[i].required) {
        return res.status(400).send({ message: config[i].name + " missing" });
      }

      if (value && typeof value != config[i].dataType) {
        return res
          .status(400)
          .send({ message: "Invalid type: " + config[i].name });
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};