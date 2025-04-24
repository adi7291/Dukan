import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter an email"],
      lowercase: true,
    },
    password: {
      type: String,
      minlength: [6, "Password should be at least 6 characters"],
      required: [true, "Please enter a password"],
      select: false, // Don't include password in queries by default
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
