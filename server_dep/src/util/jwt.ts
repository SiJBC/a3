import jwt, { SignOptions } from 'jsonwebtoken';
import { publicKey, privateKey } from '../app';
// import fs from 'fs'
// import path from 'path'


// const publicKey = fs.readFileSync(path.join(__dirname, "./public.pem", "utf8"))
// const privateKey = fs.readFileSync(path.join(__dirname, "./private.pem", "utf8"))

export const signJwt = (payload: Object, options: SignOptions = {}) => {
  return jwt.sign(payload, publicKey)
}

export const verifyJwt = <T>(token: string): T | null => {
  console.log(token)
  try {
    return jwt.verify(token, privateKey) as T;
  } catch (error) {
    return null;
  }
};