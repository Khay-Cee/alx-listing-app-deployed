import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary, { BookingDetails } from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails: BookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Form + Policy */}
        <div className="lg:col-span-2 space-y-6">
          <BookingForm />
          <CancellationPolicy />
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-1">
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
}
