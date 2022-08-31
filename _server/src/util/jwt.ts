import jwt, { SignOptions } from 'jsonwebtoken';
import fs from 'fs'
import path from 'path'



export const signJwt = (payload: Object, options: SignOptions = {}) => {
  const privateKey = process.env.ACCESS_TOKEN as string;
  // return jwt.sign(payload, privateKey, { expiresIn: '10h' })
  return jwt.sign(payload, privateKey);
}

export const verifyJwt = <T>(token: string): T | null => {
  try {
    const publicKey = process.env.accessTokenPrivateKey as string;
    return jwt.verify(token, publicKey) as T;
  } catch (error) {
    return null;
  }
};