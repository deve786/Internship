import express from 'express';
import Razorpay from 'razorpay';

const router = express.Router();

// Initialize Razorpay instance with your Razorpay key and secret
const razorpay = new Razorpay({
  key_id: 'rzp_test_3csirNNQFp17bv',
  key_secret: 'raqZlvR0wLnn33sA6aFJhB0n',
});

// Define the route to create a Razorpay order
router.post('/create_order', async (req, res) => {
  try {
    const { amount } = req.body; // You'll send the payment amount from the frontend
    const currency = 'INR'; // You can use other supported currencies as per your requirements

    // Create an order using the Razorpay instance
    const options = {
      amount: amount * 100, // Amount in paise (multiply by 100 as Razorpay expects the amount in paise)
      currency,
    };
    const order = await razorpay.orders.create(options);

    res.json(order); // Return the order details to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while creating the order.' });
  }
});

// Define the route to verify the payment after a successful transaction
router.post('/verify_payment', async (req, res) => {
  try {
    res.json({ message: '123' });
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    
    // Verify the payment using the Razorpay instance
    const attributes = {
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      signature: razorpay_signature,
      
    };
    res.json({ message: 'asdfghjk' });
    const paymentVerificationResponse = razorpay.payments.verify(attributes);
    
    if (paymentVerificationResponse) {
      
      // Payment is successful
      // You can update your database or take other actions here
      res.json({ message: 'Payment successful!' });
    } else {
      res.status(400).json({ error: 'Payment verification failed.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while verifying the payment.' });
  }
});

export default router;