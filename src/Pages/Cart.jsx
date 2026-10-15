import React from "react";
import Navbar from "../Components/Navbar";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingBasket, ArrowRight } from "lucide-react";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  return (
    <>
      <div className="min-h-screen bg-[#FFF9F2] pt-40">
        <Navbar />

        <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mt-2 text-gray-600">
            Review your favourite pizzas before checkout.
          </p>

          {cartItems.length === 0 ? (
            <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-sm">
              <div className="flex justify-center text-orange-500">
                <ShoppingBasket size={56} strokeWidth={1.5} />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Your cart is empty
              </h2>
              <p className="mt-2 text-gray-500">
                Looks like you haven't added any delicious pizzas yet.
              </p>

              <Link
                to="/menu"
                className="mt-6 inline-block rounded-full bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Explore Menu
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item._id || item.name}
                    className="flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-gray-500">
                        {"\u20B9"}
                        {Number(item.price).toFixed(2)} each
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-700">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <div className="text-lg font-extrabold text-orange-600">
                      {"\u20B9"}
                      {(Number(item.price) * item.quantity).toFixed(2)}
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item)}
                        aria-label={`Decrease ${item.name} quantity`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600"
                      >
                        -
                      </button>

                      <span className="min-w-6 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        aria-label={`Increase ${item.name} quantity`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-bold text-white hover:bg-orange-600"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item)}
                      className="mt-3 text-sm font-semibold text-red-600 hover:text-red-700"
                    >
                      Remove item
                    </button>
                  </div>
                ))}
              </div>

              <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="mt-5 flex justify-between text-gray-600">
                  <span>Items</span>
                  <span>
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>

                <div className="mt-4 flex justify-between text-lg font-extrabold text-gray-900">
                  <span>Total</span>
                  <span>
                    {"\u20B9"}
                    {totalPrice.toFixed(2)}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="mt-6 block w-full rounded-xl bg-orange-500 px-4 py-3 text-center font-bold text-white transition hover:bg-orange-600"
                >
                  Proceed to Checkout{" "}
                  <ArrowRight className="ml-2 inline" size={18} />
                </Link>
              </aside>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Cart;
