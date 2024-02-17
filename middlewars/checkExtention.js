import HttpError from '../helpers/HttpError.js';

export const checkExtention = (req, res, next) => {
  const EXTENTIONS = ['txt', 'doc', 'html', 'json', 'mp3'];

  const { fileName } = req.body;
  const separate = fileName.split('.');

  const lastEl = separate[separate.length - 1];

  const isInclude = EXTENTIONS.some((el) => el === lastEl);
  if (!isInclude) {
    next(HttpError(400, `App does not support ${lastEl} extention `));
  }
  next();
};
