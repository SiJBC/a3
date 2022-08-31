import express, {Express} from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import authHandler from './handler/auth.handler';
import verifyHandler from './handler/verify.handler'
import 'dotenv/config';



const app: Express = express()

dotenv.config()
console.log(process.env.PORT)

const port = process.env.PORT
app.use(express.json())



const connectDB = async () => {
    const dbUri = process.env.dbURI || '';
    console.log(`⚡️[server]: Connecting to DB...`)
    try {
      await mongoose.connect(dbUri);
      console.log('db connection')
    } catch (error) {
      console.log("⚡️[server]: Could not connect to db");
      console.log(error)
      process.exit(1);
    }
  }

  connectDB()

app.use('/test', (req,res) => {
  console.log(req.body)
})

app.use('/api/auth', authHandler);
app.use('/api/verify', verifyHandler);

app.use('/sum/:x/:y', (req,res,ctx) => {
    console.log(req.params.x)
    const sum = parseInt(req.params.x) + parseInt(req.params.y)
    res.send(`${sum}`)
}
)

app.use('/minus/:x/:y', (req,res,ctx) => {
    console.log(req.params.x)
    const difference = parseInt(req.params.x) - parseInt(req.params.y)
    res.send(`${difference}`)
}
)

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})