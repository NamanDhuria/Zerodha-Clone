require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { HoldingModel }=require("./model/HoldingModel");
const { PositionModel }=require("./model/PositionsModel");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { OrderModel } = require("./model/OrderModel");
const authRoute = require("./routes/AuthRoute");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
mongoose.connect(url);

app.use(cors({
    origin: process.env.NODE_ENV === "production" ? true : "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", authRoute);

app.get("/allHoldings", async (req,res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req,res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.get('/allOrders', async (req, res) => {
    let allOrders = await OrderModel.find({});
    res.json(allOrders);
});

app.post("/newOrder", async (req,res)=> {
  let newOrder = await OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order Saved !");
})

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, ()=> {
    console.log(`app is working on port ${PORT}`);
});