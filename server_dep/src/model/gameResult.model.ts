import mongoose, {Document} from "mongoose"
import {UserDocument} from "./user.model"

export interface GameResultDocument extends Document {
    date: Date;
    winnerColor: string;
    userId: UserDocument["_id"];
}

const gameResultSchema = new mongoose.Schema({
    date: Date,
    winnerColor: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})