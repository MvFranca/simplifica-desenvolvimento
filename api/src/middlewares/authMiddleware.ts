import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AuthCustomRequest } from '../types/AuthCustomRequest';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      return res
        .status(400)
        .json({ error: 'Token de autorização indefinido.' });
    }

    const jwtToken = req.headers.authorization?.split(' ')[1];

    let authenticated = true;

    jwt.verify(jwtToken, process.env.TOKEN, (err, decoded) => {
      if (err) {
        authenticated = false;
      } else {
        if (decoded) {
          if ((decoded as JwtPayload).id) {
            const userId = (decoded as JwtPayload).id;

            (req as AuthCustomRequest).user_info = {
              id: '',
            };

            (req as AuthCustomRequest).user_info.id = userId;
          }
        }
      }
    });

    if (authenticated) {
      return next();
    } else {
      return res.status(401).json({ error: 'Token de autorização inválido.' });
    }
  } catch (e) {
    return res.status(500).json({ error: (e as Error).message });
  }
};
