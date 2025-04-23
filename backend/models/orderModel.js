import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItem: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true, default: 0.0 },
        Product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: Number, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: Number },
      state: { type: String },
      updated_time: { type: String },
      email_address: { type: String },
    },
    itemPrice: {
      type: String,
      req: true,
      default: 0.0,
    },
    taxPrice: {
      type: String,
      req: true,
      default: 0.0,
    },
    totalPrice: {
      type: String,
      req: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveryAt: {
      type: Date,
    },
  },
  {
    timestamp: true,
  }
);

const Order = mongoose.schema("Order", orderSchema);
export default Order;
