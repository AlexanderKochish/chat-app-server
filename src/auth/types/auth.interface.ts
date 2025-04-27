import { Request } from 'express';

export interface AuthResponse extends Request {
  user: {
    userId: string;
    email: string;
    name: string;
  };
}
