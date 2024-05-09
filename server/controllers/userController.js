import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// a controller function that authenticates a user, it checks provided email and password against the database and generates a token
// upon successful authentication
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });

    throw new Error('Invalid email or password');
  }
});

// function for registering a new user, it checks if the credentials already exist and creates a new user if it wasnt found in the database
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({message:"User already exists"});
    throw new Error('User already exists');
  }

  const user = await User.create({
    email,
    password,
  });

  if (user) {

    res.status(200).json({ message: 'User has been registered successfully' });

  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// logs out user by clearing the JWT cookie returns a success message
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// function for retrieving user profile information, it finds the user by ID and returns their data
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile
};
