import { Response } from "express";

export const success = (
  res: Response,
  message: string = "Success",
  rest?: object
) => res.status(200).json({ statusCode: 200, message, ...rest });

export const internalError = (
  res: Response,
  message: string = "Internal Server Error",
  rest?: object
) => res.status(500).json({ statusCode: 500, message, ...rest });

export const notFound = (
  res: Response,
  message: string = "Not Found",
  rest?: object
) => res.status(404).json({ statusCode: 404, message, ...rest });
