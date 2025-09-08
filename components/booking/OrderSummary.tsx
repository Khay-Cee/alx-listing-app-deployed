import React from "react";

export interface BookingDetails {
  propertyName: string;
  price: number;       // subtotal (e.g., nightly * nights or a provided subtotal)
  bookingFee: number;
  totalNights: number;
  startDate: string;
  imageUrl?: string;
  rating?: number;     // optional: 0-5
  reviewsCount?: number;
}

const currency = (n: number) => `$${n.toLocaleString()}`;

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({
  bookingDetails,
}) => {
  const {
    propertyName,
    price,
    bookingFee,
    totalNights,
    startDate,
    imageUrl = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    rating = 4.76,
    reviewsCount = 345,
  } = bookingDetails;

  const grandTotal = price + bookingFee;

  return (
    <aside className="bg-white p-6 shadow-md rounded-lg h-max sticky top-24">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="mt-4 flex items-center">
        <img
          src={imageUrl}
          alt="Property"
          className="h-28 w-28 rounded-md object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">
            {rating.toFixed(2)} ({reviewsCount} reviews)
          </p>
          <p className="text-sm text-gray-500">
            {startDate} • {totalNights} {totalNights === 1 ? "Night" : "Nights"}
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-gray-800">
          <p>Booking Fee</p>
          <p>{currency(bookingFee)}</p>
        </div>
        <div className="flex justify-between text-gray-800">
          <p>Subtotal</p>
          <p>{currency(price)}</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold">
          <p>Grand Total</p>
          <p>{currency(grandTotal)}</p>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;