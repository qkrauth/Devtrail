// Here I define a Mongoose schema for a User - email and passwords must be unique fields, the method matchPassword compares the entered
// password witht he stored hashed password using bcrypt, before saving a User the 'pre save' middleware encrypts the password if it has
// been modified

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// define a mongoose schema for the user model, an email and a password
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
