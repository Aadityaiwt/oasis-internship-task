import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useCart } from "../Context/CartContext";
import { CheckCircle, CreditCard, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    instructions: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = (e) => {
  e.preventDefault();

  if (orderPlaced) return;

  if (cartItems.length === 0) {
    toast.error("Your cart is empty. Please add a pizza first.");
    return;
  }

  if (!customer.name.trim()) {
    toast.error("Please enter your full name.");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(customer.phone.trim())) {
    toast.error("Please enter a valid 10-digit Indian mobile number.");
    return;
  }

  if (!customer.address.trim()) {
    toast.error("Please enter your complete delivery address.");
    return;
  }

  setOrderPlaced(true);

  setCustomer({
    name: "",
    phone: "",
    address: "",
    instructions: "",
  });

  toast.success("Order placed successfully!");
};


  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <>
      <div className="min-h-screen bg-[#FFF9F2] pt-20">
        <Navbar />

        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
          <div className="mb-8">
            <p className="font-semibold text-orange-600">PizzaHub / Checkout</p>

            <h1 className="mt-2 flex flex-wrap items-center gap-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Complete Your Order
              <CheckCircle className="text-orange-500" size={30} />
            </h1>

            <p className="mt-3 text-gray-600">
              Just a few details and your delicious pizza will be on its way!
            </p>
          </div>
          {orderPlaced && (
            <div
              role="status"
              className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-6"
            >
              <h2 className="flex items-center gap-2 text-xl font-bold text-green-800">
                <CheckCircle size={24} />
                Order Placed Successfully!
              </h2>

              <p className="mt-2 text-green-700">
                Thank you, {customer.name}! Your demo order has been confirmed.
              </p>

              <p className="mt-1 text-sm text-green-700">
                Total: {"\u20B9"}
                {totalPrice.toFixed(2)}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                This is a frontend demo. Your order has not been saved to a
                database.
              </p>

              <Link
                to="/menu"
                className="mt-4 inline-block font-semibold text-orange-600 hover:text-orange-700"
              >
                Order More Pizzas <ArrowRight className="ml-1 inline" size={18} />
              </Link>
            </div>
          )}
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Delivery Form */}
            <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Delivery Details
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="customerName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="customerName"
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Complete Delivery Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    rows={4}
                    placeholder="House no., street, area, landmark..."
                    required
                    className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="instructions"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Delivery Instructions (Optional)
                  </label>

                  <textarea
                    id="instructions"
                    name="instructions"
                    value={customer.instructions}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Any special instructions?"
                    className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="flex items-center gap-2 font-semibold text-gray-900">
                    <CreditCard size={20} className="text-orange-600" />
                    Payment Method
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Cash on Delivery (COD)
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Demo only order processing will be connected to the
                    backend later.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={cartItems.length === 0 || orderPlaced}
                  className="w-full rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Place Order
                </button>
              </form>
            </section>

            {/* Order Summary */}

            {/* Order Summary */}
            <aside className="h-fit rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              {cartItems.length === 0 ? (
                <div className="mt-6 rounded-xl bg-orange-50 p-4">
                  <p className="font-semibold text-gray-900">
                    Your cart is empty
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Add some delicious pizzas before checkout.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mt-6 space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item._id ?? item.id ?? item.name}
                        className="flex items-center gap-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <p className="font-bold text-gray-900">
                          {"\u20B9"}
                          {(Number(item.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                    <div className="flex justify-between text-gray-600">
                      <span>Total Items</span>
                      <span>{totalItems}</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>
                        {"\u20B9"}
                        {totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-lg font-extrabold text-gray-900">
                      <span>Total</span>
                      <span>
                        {"\u20B9"}
                        {totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </>
              )}

              <p className="mt-5 text-sm leading-6 text-gray-500">
                Delivery charges and final order processing will be configured
                later.
              </p>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
};
export default Checkout;
