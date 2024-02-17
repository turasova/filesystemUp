import express from "express";

import validateBody from "#helpers/validateBody.js";

import { createFileSchema } from "#schemas/filesSchemas.js";
import { checkExtension } from "#middlewares/checkExtension.js";
import { createFile, getFiles } from "#controllers/filesControllers.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFileSchema),
  checkExtension,
  createFile
);

filesRouter.get("/", getFiles);

export default filesRouter;
