import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PopularPizzas from "../Components/PopularPizzas";
import { Link } from "react-router-dom";

import {
  Sparkles,
  Star,
  Bike,
  Leaf,
  Flame,
  Heart,
  ShieldCheck,
  ChefHat,
  ShoppingBasket,
  ArrowRight,
  CheckCircle,
  Plus,
  Minus,
  Pizza,
  UtensilsCrossed,
  PackageCheck,
  MessageCircle,
} from "lucide-react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const features = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "We focus on fresh toppings, flavorful sauces, and ingredients selected for a delicious bite.",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: ChefHat,
      title: "Made with Passion",
      description:
        "Every pizza is prepared with care to bring together a satisfying mix of crust, sauce, and cheese.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Bike,
      title: "Doorstep Delivery",
      description:
        "Place your order online and enjoy a convenient pizza-ordering experience from home.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: Heart,
      title: "Made for Sharing",
      description:
        "From movie nights to family dinners, there is always a good reason to share a pizza.",
      color: "bg-pink-100 text-pink-700",
    },
  ];

  const categories = [
    {
      title: "Classic Favorites",
      description: "Timeless flavors for every pizza lover.",
      icon: Pizza,
      color: "from-orange-400 to-red-500",
      tag: "TIMELESS TASTE",
    },
    {
      title: "Cheese Lovers",
      description: "For those who believe more cheese is always better.",
      icon: Heart,
      color: "from-yellow-400 to-orange-500",
      tag: "EXTRA DELICIOUS",
    },
    {
      title: "Veggie Delight",
      description: "Colorful vegetables and fresh, vibrant flavors.",
      icon: Leaf,
      color: "from-green-400 to-emerald-600",
      tag: "FRESH & FLAVORFUL",
    },
    {
      title: "Spicy Sensations",
      description: "A little heat for people who love bold flavors.",
      icon: Flame,
      color: "from-red-500 to-rose-700",
      tag: "BRING THE HEAT",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: UtensilsCrossed,
      title: "Explore the Menu",
      description:
        "Discover pizza varieties and choose the flavors you are craving.",
    },
    {
      number: "02",
      icon: ShoppingBasket,
      title: "Build Your Cart",
      description:
        "Add your favorite pizzas and review your order before checkout.",
    },
    {
      number: "03",
      icon: PackageCheck,
      title: "Place Your Order",
      description:
        "Enter your delivery details and complete the checkout process.",
    },
    {
      number: "04",
      icon: Bike,
      title: "Enjoy Your Pizza",
      description:
        "Sit back and look forward to a delicious pizza moment at home.",
    },
  ];

  const faqs = [
    {
      question: "How can I order a pizza?",
      answer:
        "Browse the menu, choose a pizza, add it to your cart, and continue to checkout to enter your delivery details.",
    },
    {
      question: "Can I add multiple pizzas to my cart?",
      answer:
        "Yes. Add different pizzas to your cart and review your selected items before proceeding to checkout.",
    },
    {
      question: "Can I change my order after checkout?",
      answer:
        "Order modification depends on the ordering system. This frontend demo does not yet support live order changes.",
    },
    {
      question: "Are online payments available?",
      answer:
        "Payment options will depend on the backend and payment gateway integrated into PizzaHub. Live payment processing is not enabled by this frontend alone.",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-[#FFF9F2]">
      <Navbar search={search} onSearchChange={setSearch} />

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-red-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-8">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              <Sparkles size={18} />
              Freshly baked, just for you
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Every Slice
              <br />
              Tells a
              <span className="block bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Delicious Story.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              Discover your favorite pizzas, made with fresh ingredients, rich
              cheese, and flavors that bring everyone together. Your next
              delicious moment is just one click away.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-7 py-3 font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Menu <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/70 px-7 py-3 font-bold text-orange-700 transition hover:bg-orange-50"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-orange-200 pt-7">
              <div>
                <p className="flex items-center gap-1 text-2xl font-extrabold text-gray-900">
                  4.9
                  <Star
                    size={19}
                    className="fill-orange-500 text-orange-500"
                  />
                </p>
                <p className="mt-1 text-sm text-gray-500">Customer rating</p>
              </div>

              <div className="h-10 w-px bg-orange-200" />

              <div>
                <p className="text-2xl font-extrabold text-gray-900">30 min</p>
                <p className="mt-1 text-sm text-gray-500">
                  Delivery estimate
                </p>
              </div>

              <div className="h-10 w-px bg-orange-200" />

              <div>
                <p className="text-2xl font-extrabold text-gray-900">Fresh</p>
                <p className="mt-1 text-sm text-gray-500">
                  Flavor in every bite
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-orange-300/40 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white bg-white/70 p-4 shadow-2xl shadow-orange-200/60 sm:p-6">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85"
                alt="Pizza topped with fresh ingredients"
                className="aspect-square w-full rounded-[2rem] object-cover"
              />

              <div className="absolute -left-3 top-12 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8">
                <p className="flex items-center gap-1 text-sm font-bold text-gray-900">
                  <Star
                    size={16}
                    className="fill-orange-500 text-orange-500"
                  />
                  Pizza love
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Find your next favorite
                </p>
              </div>

              <div className="absolute -bottom-5 right-2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:right-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Bike size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Pizza to your door</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Your next meal starts here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS STRIP */}
      <section className="border-y border-orange-100 bg-white py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 md:grid-cols-4">
          {[
            { icon: Leaf, text: "Fresh flavors" },
            { icon: ChefHat, text: "Crafted with care" },
            { icon: ShieldCheck, text: "Easy ordering" },
            { icon: Heart, text: "Made to share" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center justify-center gap-3 text-sm font-bold text-gray-700"
              >
                <Icon size={21} className="shrink-0 text-orange-500" />
                {item.text}
              </div>
            );
          })}
        </div>
      </section>

      {/* POPULAR PIZZAS */}
      <PopularPizzas searchTerm={search} />

      {/* WHY CHOOSE US */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[3px] text-orange-600">
              The PizzaHub difference
            </span>
            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-5xl">
              More Than Just a{" "}
              <span className="text-orange-500">Pizza.</span>
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Great pizza is about the ingredients, the experience, and the
              little moments that make every meal special.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-3xl border border-orange-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/70"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} transition group-hover:scale-110`}
                  >
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE CATEGORIES */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[3px] text-orange-600">
                Something for every craving
              </span>
              <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-5xl">
                Find Your <span className="text-orange-500">Flavor.</span>
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Whether you love classic combinations or bold flavors, there is
                a pizza style waiting for you.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex w-fit items-center gap-2 font-bold text-orange-600 transition hover:gap-4"
            >
              Browse menu <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  to="/menu"
                  className="group relative min-h-64 overflow-hidden rounded-3xl bg-gray-900 p-6 text-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${category.color} opacity-30 blur-2xl transition group-hover:opacity-60`}
                  />

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color}`}
                  >
                    <Icon size={28} />
                  </div>

                  <p className="relative mt-7 text-[10px] font-extrabold tracking-[2px] text-orange-300">
                    {category.tag}
                  </p>
                  <h3 className="relative mt-2 text-xl font-extrabold">
                    {category.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-gray-300">
                    {category.description}
                  </p>

                  <div className="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                    Explore pizzas
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIAL EXPERIENCE BANNER */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-gray-950 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <span className="flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300">
              <Sparkles size={17} />
              Your next craving starts here
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">
              Good Times.
              <span className="block text-orange-400">Great Pizza.</span>
              Happy Moments.
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-300">
              Movie night, a weekend treat, or a quick meal after a long day.
              Make the moment better with a pizza picked just for you.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              Find Your Pizza <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative min-h-72">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85"
              alt="Fresh pizza ready to be enjoyed"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/30 via-transparent to-transparent md:from-gray-950/50" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-black/60 p-4 text-white backdrop-blur-md">
              <p className="flex items-center gap-2 text-sm font-bold">
                <Heart size={17} className="text-orange-400" />
                Made for your happy moments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[3px] text-orange-600">
              Simple and convenient
            </span>
            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-5xl">
              From Craving to <span className="text-orange-500">Checkout.</span>
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Your pizza-ordering journey is designed to be straightforward
              from the first click to the final step.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="absolute left-[65%] top-9 hidden h-px w-[70%] border-t-2 border-dashed border-orange-200 lg:block" />
                  )}

                  <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600 shadow-sm">
                    <Icon size={29} />
                  </div>

                  <p className="mt-5 text-xs font-extrabold tracking-[2px] text-orange-500">
                    STEP {step.number}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REASONS TO ORDER */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[3px] text-orange-600">
              Your pizza, your moment
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-5xl">
              Every Occasion
              <span className="block text-orange-500">Deserves a Slice.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Pizza is more than a meal. It is the centerpiece of a get-together,
              the reward after a busy day, and the perfect excuse to spend time
              with people you love.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "A quick and convenient way to choose your meal",
                "A variety of flavors to explore",
                "An easy cart and checkout experience",
                "A delicious idea for sharing with friends",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={21}
                    className="mt-0.5 shrink-0 text-green-600"
                  />
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              Start Exploring <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl bg-orange-100 p-3">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=85"
                alt="Classic pizza with fresh basil"
                loading="lazy"
                className="h-52 w-full rounded-2xl object-cover sm:h-64"
              />
              <p className="px-2 pb-2 pt-4 font-extrabold text-gray-900">
                Classic cravings
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl bg-red-100 p-3">
              <img
                src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=85"
                alt="Cheesy pizza with flavorful toppings"
                loading="lazy"
                className="h-52 w-full rounded-2xl object-cover sm:h-64"
              />
              <p className="px-2 pb-2 pt-4 font-extrabold text-gray-900">
                Cheesy happiness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[3px] text-orange-600">
              Need to know?
            </span>
            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-5xl">
              Frequently Asked <span className="text-orange-500">Questions.</span>
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Have a question about choosing your pizza or using the ordering
              experience? Start here.
            </p>

            <div className="mt-7 flex items-start gap-4 rounded-2xl bg-orange-50 p-5">
              <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="font-extrabold text-gray-900">
                  Still need help?
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Visit our contact page to find the available contact
                  information.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                >
                  Contact us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-orange-200 bg-orange-50/60"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-bold leading-6 text-gray-900">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-orange-600">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <p className="text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 px-6 py-14 text-center shadow-xl shadow-orange-200/60 sm:px-12 sm:py-20">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur">
            <Pizza size={34} />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
            Your Next Favorite Pizza Is Waiting.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/90">
            Explore the menu, discover your favorite flavors, and build your
            next pizza order with PizzaHub.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-extrabold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Explore the Menu <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <Footer className="border-t border-orange-100 bg-[#FFF9F2] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-extrabold text-gray-900">
            PizzaHub <span className="text-orange-500">.</span>
          </p>
          <p className="text-xs leading-6 text-gray-500">
            Crafted for pizza lovers. Great flavors, better moments.
          </p>
          <Link
            to="/contact"
            className="text-sm font-bold text-orange-600 hover:text-orange-700"
          >
            Get in touch
          </Link>
        </div>
    </Footer>
    </div>

    </>
  );
};

export default Home;
