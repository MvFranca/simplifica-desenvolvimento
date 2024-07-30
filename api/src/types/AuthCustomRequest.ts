import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface AuthCustomRequest extends Request {
  user_info: {
    id: string | JwtPayload | number;
  };
}
