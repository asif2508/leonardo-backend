const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/v1/Users.routes");
const serviceRouter = require("./Routes/v1/Services.routes")
const paymentRouter = require("./Routes/v1/Payment.routes")
const orderRouter = require("./Routes/v1/Orders.route")
const availableTimeRouter =  require("./Routes/v1/AvailableTime.route"); 
const favoriteRouter = require('./Routes/v1/Favorites.route')
const reviewsRouter = require('./Routes/v1/Reviews.Routes')
// middlewares
app.use(express.json({ limit: '50mb' }));
app.use(cors());


app.get("/", (req, res) => {
  res.send("Route is working!");
});

// user api route
app.use('/api/v1/user', userRouter)
app.use('/api/v1/services', serviceRouter)
app.use('/api/v1/payment', paymentRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/favorite', favoriteRouter)
app.use('/api/v1/reviews', reviewsRouter)
// Available time api route
app.use('/api/v1/availableTime', availableTimeRouter)

module.exports = app;
