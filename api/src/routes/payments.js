const { Router } = require("express");
require('dotenv').config()
const router = Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

router.post("/pay", async (req, res) => {
    try {
      console.log("payment aca", req.body);
      const { name, lastname, price } = req.body;
      if (!name) return res.status(400).json({ message: "Please enter a name" });
      if (!lastname) return res.status(400).json({ message: "Please enter a LastName" });

      const paymentIntent = await stripe.paymentIntents.create({
        amount: price * 100,
        currency: "USD",
        payment_method_types: ["card"],
        metadata: { name },
      });
      const clientSecret = paymentIntent.client_secret;
      res.json({ message: "Payment initiated", clientSecret });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  router.post("/stripe", async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;
    try {
      event = await stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  
    // Event when a payment is initiated
    if (event.type === "payment_intent.created") {
      console.log(`${event.data.object.metadata.name} initated payment!`);
    }
    // Event when a payment is succeeded
    if (event.type === "payment_intent.succeeded") {
      console.log(`${event.data.object.metadata.name} succeeded payment!`);
      // fulfilment
    }
    res.json({ ok: true });
  });

module.exports = router;