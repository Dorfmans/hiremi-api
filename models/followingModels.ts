import mongoose, {Schema} from "mongoose";

const followingSchema = new Schema({
    userIds: {type: String, required: true},
    followingUserId: {type: String, required: true}
});

export const followingModels = (mongoose.models.following || mongoose.model('following', followingSchema));