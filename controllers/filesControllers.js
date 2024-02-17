import fs from "fs/promises";
import path from "path";
import HttpError from "#helpers/HttpError.js";

const fileFolder = path.resolve("./files");

export const createFile = async (req, res, next) => {
  try {
    const file = req.body;
    const { fileName, content } = file;

    const options = {
      encoding: "utf-8",
    };

    const filePath = path.resolve("./files", fileName);
    await fs.writeFile(filePath, content, options);

    res.status(201).json({
      message: "Files created successfully",
    });
  } catch (error) {
    console.error(error);
    next(HttpError(500));
  }
};

export const getFiles = async (_, res, next) => {
  try {
    const files = await fs.readdir(fileFolder);

    res.json(files);

    console.log("files", files);
  } catch (error) {
    console.error(error);
    next(HttpError(500));
  }
};

export const getFile = async (req, res, next) => {
  try {
    const files = await fs.readdir(fileFolder);
    const { fileName } = req.params;

    if (!files.includes(fileName)) {
     throw HttpError(404,"Not found")
    }
    const filePath = path.resolve("./files", fileName);

    const content = await fs.readFile(filePath, "utf-8");
    res.json({ content: content });

  } catch (error) {
    next(error)
  }
}
