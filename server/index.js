import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

// Health check
app.get("/", (req, res) => {
  res.send("ARKEES AI backend running ✅");
});

// Create payment order
app.post("/create-order", async (req, res) => {
  try {
    const { order_amount, customer_id } = req.body;

    const response = await fetch(
      "https://sandbox.cashfree.com/pg/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": process.env.CF_CLIENT_ID,
          "x-client-secret": process.env.CF_CLIENT_SECRET,
          "x-api-version": "2023-08-01"
        },
        body: JSON.stringify({
          order_id: `order_${Date.now()}`,
          order_amount: order_amount,
          order_currency: "INR",
          customer_details: {
            customer_id: customer_id,
            customer_phone: "9999999999"
          }
        })
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
