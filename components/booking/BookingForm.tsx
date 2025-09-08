import React from "react";

const inputBase =
  "mt-2 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

const labelBase = "block text-sm font-medium text-gray-700";

const sectionTitle = "text-lg md:text-xl font-semibold mt-6";

import axios from "axios";
import { useState } from "react";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    exp: "",
    cvv: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Details</h2>

      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="firstName" className={labelBase}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={inputBase}
              autoComplete="given-name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelBase}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={inputBase}
              autoComplete="family-name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className={labelBase}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputBase}
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelBase}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={inputBase}
              autoComplete="tel"
              placeholder="+233 555 000 000"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className={sectionTitle}>Pay with</h2>
        <div className="mt-4">
          <label htmlFor="cardNumber" className={labelBase}>
            Card Number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            inputMode="numeric"
            className={inputBase}
            placeholder="4242 4242 4242 4242"
            autoComplete="cc-number"
            required
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="exp" className={labelBase}>
              Expiration Date (MM/YY)
            </label>
            <input
              id="exp"
              name="exp"
              className={inputBase}
              placeholder="08/27"
              autoComplete="cc-exp"
              required
              value={formData.exp}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cvv" className={labelBase}>
              CVV
            </label>
            <input
              id="cvv"
              name="cvv"
              inputMode="numeric"
              className={inputBase}
              placeholder="123"
              autoComplete="cc-csc"
              required
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className={sectionTitle}>Billing Address</h2>
        <div className="mt-4">
          <label htmlFor="street" className={labelBase}>
            Street Address
          </label>
          <input
            id="street"
            name="street"
            type="text"
            className={inputBase}
            autoComplete="street-address"
            required
            value={formData.street}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="city" className={labelBase}>
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className={inputBase}
              autoComplete="address-level2"
              required
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="state" className={labelBase}>
              State/Region
            </label>
            <input
              id="state"
              name="state"
              type="text"
              className={inputBase}
              autoComplete="address-level1"
              required
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="zip" className={labelBase}>
              Zip / Postal Code
            </label>
            <input
              id="zip"
              name="zip"
              inputMode="numeric"
              className={inputBase}
              autoComplete="postal-code"
              required
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country" className={labelBase}>
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              className={inputBase}
              autoComplete="country-name"
              required
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-green-600 py-2 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          disabled={loading}
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default BookingForm;