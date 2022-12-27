const { v4: uuidv4 } = require("uuid");

const stripe = require("stripe")(
  "sk_test_51MJcYMHubqzF68mGWiSu1YqYqBxhRlpmkNy8Nx7ZYMN625u4XOlvrzbALJv2V41SogDPZrQRmFDbDc4kcxKsjUvM00cE1CZhrU"
);
module.exports.getStripePayment = async (req, res) => {
  const { token, amount } = req.body;
  console.log(token, amount);
  const idempotencyKey = uuidv4();
  await stripe.customers
    .create({
      email: token.email,
      source: token,
    })
    .then((customer) => {
      stripe.charges
        .create(
          {
            amount: amount * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
          },
          { idempotencyKey }
        )
        .then((result) => {
          res.status(200).json({
            status: true,
            data: result,
            message: "Payment done successfully!",
          });
        });
    })
    .catch((err) => {
      res.status(200).json({
        status: false,
        message: err.message,
      });
    });
};
