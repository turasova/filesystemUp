import express from 'express';

import validateBody from '../helpers/validateBody.js';

import { createFileSchema } from '../schemas/filesSchemas.js';
import { checkExtention } from '../middlewars/checkExtention.js';
import { createFile } from '../controllers/filesControllers.js';

const filesRouter = express.Router();

filesRouter.post('/', validateBody(createFileSchema), checkExtention, createFile);

export default filesRouter;
