import express from "express";

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    //find all product
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    // Now we are not having array of object we are getting from DB
    // const product = products.find(
    //   (productItem) => productItem._id === req.params.id
    // );

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Resource not fount");
    }
  })
);

export default router;
