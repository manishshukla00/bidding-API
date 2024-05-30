import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: { type: String, required: true },
    is_read: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Notification = mongoose.model("notification", NotificationSchema);
export default Notification;
