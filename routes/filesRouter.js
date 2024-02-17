import express from "express";
import createFileSchema from "../schemas/filesSchemas";
import validateBody from "../helpers/validateBody";

const filesRouter = express.Router();

filesRouter.post("/", validateBody(createFileSchema));

export default filesRouter;
