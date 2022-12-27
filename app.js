const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/v1/Users.routes");
const serviceRouter = require("./Routes/v1/Services.routes")
const paymentRouter = require("./Routes/v1/Payment.routes")
const orderRouter = require("./Routes/v1/Orders.route")
// middlewares
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Route is working!");
});

// user api route
app.use('/api/v1/user', userRouter)
app.use('/api/v1/services', serviceRouter)
app.use('/api/v1/payment', paymentRouter)
app.use('/api/v1/orders', orderRouter)

module.exports = app;
