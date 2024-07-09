// I am defining a middleware function called protect - used for protecting routes in my Express application. It gets a JWT token from
// cookies and verifies it then attaches the user information (minus the password) to the request object. Invalid if JWT is missing

import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// middleware function in express that has access to the request and response objects
const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');

      next(); // next function passes control to the next middleware function in the stack
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    // throw new Error('Not authorized, no token');
    console.log("no token");
  }
});

export { protect };
