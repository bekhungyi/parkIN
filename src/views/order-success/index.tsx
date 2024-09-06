import { FC } from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { OrderSuccessPage } from "views";

const OrderSuccess: FC = () => {
  const router = useRouter();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem('order');
    if (storedOrder) {
        setOrder(JSON.parse(storedOrder));
    }
}, []);

  const dummyQR = "https://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg"; // Dummy QR code image

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Booking Successful!</h1>
      <div className="bg-o shadow-lg rounded-lg p-6 mb-6">
        <img src={dummyQR} alt="Dummy QR Code" className="w-32 mx-auto mb-4" />
        <div className="text-center text-xl font-semibold mb-4">
          <p>Pin: <span className="text-indigo-600">1234</span></p>
        </div>
        <p className="text-center text-xl font-bold mb-10">
          You've successfully booked a parkIN.<br></br>Screenshot/save this page to scan QR or enter the<br></br>4-digit pin to collect parkIN access card.
        </p>
        
        <div className="text-left">
          <h2 className="text-xl font-bold mb-2">Parking Details</h2>
          <p><strong>Start Date:</strong> September 1, 2024</p>
          <p><strong>End Date:</strong> October 1, 2024</p>
          <p><strong>Property Name:</strong> Platinum Lake Condo</p>
          <p><strong>Location:</strong> 123 Main St, Cityville</p>
          <p><strong>Amount Paid:</strong> 10 SOL</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Transaction Details</h2>
          <p><strong>Transaction ID:</strong> 567890</p>
          <p><strong>Transaction Time:</strong> September 1, 2024, 12:34 PM UTC</p>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
