import mongoose from "mongoose";

const BidSchema = new mongoose.Schema({
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bid_amount: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

const Bid = mongoose.model("bid", BidSchema);
