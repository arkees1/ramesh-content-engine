import { Cashfree, CFEnvironment } from "cashfree-pg";

Cashfree.XClientId = process.env.CASHFREE_APP_ID!;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY!;
Cashfree.XEnvironment =
  process.env.CASHFREE_ENV === "PRODUCTION"
    ? CFEnvironment.PRODUCTION
    : CFEnvironment.SANDBOX;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { amount, customer } = req.body;

    const orderId = "order_" + Date.now();

    const response = await Cashfree.PGCreateOrder("2023-08-01", {
      order_id: orderId,
      order_amount: amount,
      order_currency: "INR",
      customer_details: {
        customer_id: customer.id,
        customer_email: customer.email,
        customer_phone: customer.phone,
      },
      order_meta: {
        return_url: `${process.env.APP_BASE_URL}/payment-success?order_id={order_id}`,
      },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: "Order creation failed" });
  }
}
