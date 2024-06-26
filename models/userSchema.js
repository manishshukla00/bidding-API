import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user" },
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model("user", UserSchema);
export default User;
