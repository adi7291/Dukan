import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/user.js";
import {products} from "./data/products.js";

import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data imported!!".green.inverse);

    process.exit(1);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Destroyed!!".red.inverse);
    process.exit(1);
  } catch (error) {
    console.error(`${error}.red.inverse`);
  }
};

// console.log(process.argv[1]);
// console.log(process.argv[0]);
// console.log(process.argv[2]);
// console.log(process.argv);

if (process.argv[2] == "destroyData") {
  console.log('one function is executed')
  destroyData();
} else {
  console.log('another function is executed')
  importData();
}
