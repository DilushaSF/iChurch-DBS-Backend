const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: "7d"});
};

// Login user
const loginUser = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.login(email, password);

    const token = generateToken(user._id);

    res.status(200).json({
      user: {
        _id: user._id,
        email: user.email,
        churchName: user.churchName,
        parishName: user.parishName,
      },
      token,
    });
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

// Register user
const registerUser = async (req, res) => {
  const {churchName, parishName, email, password} = req.body;

  try {
    const user = await User.signup(email, password, churchName, parishName);

    const token = generateToken(user._id);

    res.status(201).json({
      user: {
        _id: user._id,
        email: user.email,
        churchName: user.churchName,
        parishName: user.parishName,
      },
      token,
    });
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {loginUser, registerUser};
