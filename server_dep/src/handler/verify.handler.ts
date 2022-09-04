import { deserializeUser } from "../middleware/deserializeUser";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const verifyHandler = express.Router()
verifyHandler.use(deserializeUser)

// function authenticateToken(req: any, res:any, next: any){
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1] 
//     if(token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN as string, (err: any, user: any) => {
//         if(err) return res.sendStatus(403);
//         req.user = user
//         next()
//     })
// }

verifyHandler.get("/", async(req: Request, res: Response) => {
    res.send(200)
})

export default verifyHandler