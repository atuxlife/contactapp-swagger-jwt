import { Schema, model } from 'mongoose';

const followSchema = new Schema({
    userid: {
        ref: "User",
        type: Schema.Types.ObjectId
    },
    followid: {
        ref: "User",
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Follow', followSchema);