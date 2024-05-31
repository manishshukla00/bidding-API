import bcryptjs from "bcryptjs";
import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 8);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRETE_KEY, {
      expiresIn: "4d",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
