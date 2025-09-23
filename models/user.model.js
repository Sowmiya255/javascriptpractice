import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["Admin", "Member", "Guest"],
        default: "Member"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
