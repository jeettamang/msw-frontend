import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseUrl } from "../config/ApiRoutes";

function PaymentAPI() {
  const { state } = useLocation();

  const [paymentData, setPaymentData] = useState(null);

  const hasCreated = useRef(false);

  // Safety check
  if (!state) {
    return (
      <div className="text-center mt-20 text-red-500">
        Invalid payment request
      </div>
    );
  }

  useEffect(() => {
    if (hasCreated.current) return;

    const createPending = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.post(
          `${baseUrl}/enrollment/create`,
          {
            address: state.address,
            phone: state.phone,
            course: state.course,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setPaymentData(res.data);

        hasCreated.current = true;

        console.log("Pending enrollment created");
      } catch (err) {
        console.log("Pending error:", err);
      }
    };

    createPending();
  }, [state]);

  // Wait until backend responds
  if (!paymentData) {
    return <div className="text-center mt-20">Processing payment...</div>;
  }

  const transaction_uuid = paymentData.transaction_uuid;
  const amount = paymentData.amount;

  // Create signature using backend data
  const message = `total_amount=${amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;

  const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");

  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div>
      <form
        className="bg-white flex shadow-2xl justify-center gap-y-10 items-center flex-col p-10 w-96 m-auto mt-20"
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input type="hidden" name="amount" value={amount} />

        <input type="hidden" name="tax_amount" value="0" />

        <input type="hidden" name="total_amount" value={amount} />

        <input type="hidden" name="transaction_uuid" value={transaction_uuid} />

        <input type="hidden" name="product_code" value="EPAYTEST" />

        <input type="hidden" name="product_service_charge" value="0" />

        <input type="hidden" name="product_delivery_charge" value="0" />

        <input
          type="hidden"
          name="success_url"
          value="http://localhost:7000/api/v1/enrollment/verify-esewa"
        />

        <input
          type="hidden"
          name="failure_url"
          value="http://localhost:5173/failure"
        />

        <input
          type="hidden"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
        />

        <input type="hidden" name="signature" value={signature} />

        <h1 className="text-red-600 font-semibold text-5xl">Rs. {amount}</h1>

        <input
          className="text-2xl bg-orange-500 p-3 text-white rounded-sm w-32 cursor-pointer"
          value="Pay"
          type="submit"
        />
      </form>
    </div>
  );
}

export default PaymentAPI;
