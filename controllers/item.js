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
    res.status(201).json({ message: "Item created successfully", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { name, description, starting_price, end_time } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    item.name = name ?? item.name;
    item.description = description ?? item.description;
    item.starting_price = starting_price ?? item.starting_price;
    item.end_time = end_time ?? item.end_time;
    item.image_url = imageUrl ?? item.image_url;
    await item.save();
    res.status(200).json({ message: "Item updated successfully", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
