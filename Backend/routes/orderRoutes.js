import express from "express";
import {v4 as uuid} from "uuid";
import stripe from "stripe";
import dotenv from 'dotenv';
import Order from "../models/orderModel.js";
dotenv.config();

const router = express.Router();
const SECRET_KEY =  process.env.SECRET_KEY


router.post("/placeOrder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
 console.log("data for placing a new order",token, subtotal, currentUser, cartItems )
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "$",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuid(),
      }
    );

    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pinCode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });

      newOrder.save();

      res.send("Order placed successfully");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

router.post("/getUserOrder/:id", async (req, res) => {
  const userId  = req.params.id
  try {
    const orders = await Order.find({ _id: userId }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deliver/:id", async (req, res) => {
  const orderId = req.params.id
  try {
    const order = await Order.findOne({ _id: orderId });
    order.isDelivered = true;
    await order.save();
    res.send("Order Delivered Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

export default router;