import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  res.status(200).json({ msg: "funcionando!!" });
};
