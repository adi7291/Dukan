import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    // what is the use of name in the rating ans user info is supposed to be captured in the User.
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
    // do we need user in product shema or come up with some better name like
    // multiple staffs are responsible for the managing the products. 
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
      // is sisngle enough to describe products.
      type: "string",
      required: true,
    },
    brand: {
      type: "string",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      // why is the duplicate rating when rating are in the reviews
      // can took avreage of them in fly in controller.
      type: Number,
      required: true,
      default: 0,
    },
    numReview: {
      // this one has same problem as the first
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
