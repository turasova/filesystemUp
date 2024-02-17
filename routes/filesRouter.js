import express from "express";

import validateBody from "#helpers/validateBody.js";

import { createFileSchema } from "#schemas/filesSchemas.js";
import { checkExtension } from "#middlewares/checkExtension.js";
import { createFile } from "#controllers/filesControllers.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFileSchema),
  checkExtension,
  createFile
);

export default filesRouter;
