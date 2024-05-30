import Item from "../models/itemSchema.js";

export const createItem = async (req, res) => {
  try {
    const { name, description, starting_price, end_time } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    const item = new Item({
      name,
      description,
      starting_price,
      end_time,
      image_url: imageUrl,
    });
    await item.save();
    res.status(201).json({ message: "Item created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
