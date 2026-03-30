import axios from "axios";


const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/enrollment/verify-esewa",
      paymentData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("Payment verification response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Payment verification error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Example usage:
/*verifyPayment({
  address: "kritipur",
  phone: "9878787654",
  course: "69a9a459dcd2267177737308",
  amount: 2555,
  payment_method: "esewa",
  transaction_uuid: "3f419fb9-4ca5-40f4-a968-f660b5357696",
});
*/