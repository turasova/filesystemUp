import HttpError from "#helpers/HttpError.js";

export const checkExtension = (req, res, next) => {
  const EXTENSIONS = ["txt", "doc", "html", "json", "mp3"];

  const { fileName } = req.body;
  const separate = fileName.split(".");

  const lastEl = separate[separate.length - 1];
  // const isInclude = EXTENSIONS.some((el) => el === lastEl);

  const isInclude = EXTENSIONS.some((el) => fileName.endsWith(el));

  if (!isInclude) {
    next(HttpError(400, `App does not support [${lastEl}] extension`));
  }
  next();
};
