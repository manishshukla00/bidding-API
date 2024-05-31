import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  starting_price: { type: Number, required: true },
  current_price: {
    type: Number,
    default: function () {
      return this.starting_price;
    },
  },
  image_url: { type: String },
  end_time: { type: Date },
  created_at: { type: Date, default: Date.now },
});

const Item = mongoose.model("item", ItemSchema);
export default Item;
