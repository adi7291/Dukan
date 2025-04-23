import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  User: {
    type: mongoose.Schema.Types.objectId,
    required: true,
    ref: "User",
  },
});
const productSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.schema.Type.objectId,
      required: true,
      ref: "User",
    },
    name: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    brand: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReview: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamp: true }
);

export default productSchema;
