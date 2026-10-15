import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  Pizza,
  Clock,
  Leaf,
  Heart,
  ArrowRight,
  CheckCircle2,
  Flame,
  ChefHat,
} from "lucide-react";

const About = () => {

  const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Fresh vegetables, premium cheese, and carefully selected ingredients in every bite.",
  },
  {
    icon: ChefHat,
    title: "Made with Passion",
    description:
      "Every pizza is prepared with care to bring you an unforgettable taste.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "We work hard to deliver your favorite pizza fresh, hot, and right on time.",
  },
];


  return (
    <>

    <div className="min-h-screen bg-[#FFF9F2] text-gray-900">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:px-10">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
              <Flame size={17} />
              OUR STORY, YOUR HAPPINESS
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-7xl">
              More Than Pizza.
              <span className="mt-2 block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                It's Happiness.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              At PizzaHub, we believe great pizza brings people together.
              From fresh ingredients to our signature flavors, every slice
              is made to turn ordinary moments into delicious memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Explore Our Menu
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-4 font-bold text-gray-800 transition hover:border-orange-300 hover:text-orange-600"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-md grid-cols-2 gap-4">
              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-2 text-orange-500">
                  <Leaf size={20} />
                  <span className="text-2xl font-black">Fresh</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Ingredients, every day
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-2 text-orange-500">
                  <Heart size={20} />
                  <span className="text-2xl font-black">Made</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  With love in every slice
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL SECTION */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-orange-300/40 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-orange-900/10 sm:p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-orange-100">
                <img
                  src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1100&q=85"
                  alt="Freshly prepared artisan pizza"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[440px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                    Fresh from our kitchen
                  </p>
                  <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                    Every Slice Tells a Story
                  </h2>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 top-12 flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-xl sm:-left-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Pizza size={27} />
              </div>
              <div>
                <p className="font-extrabold text-gray-900">PizzaHub</p>
                <p className="text-xs text-gray-500">Made fresh, served hot</p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-bold text-white shadow-lg shadow-orange-500/30 sm:right-8">
              <CheckCircle2 size={20} />
              Quality in Every Bite
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-bold uppercase tracking-[0.2em] text-orange-500">
                WHY PIZZAHUB?
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Good Food. Great
                <span className="text-orange-500"> Moments.</span>
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                We focus on the little things that make every pizza experience
                special, from the first ingredient to the final slice.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-3xl border border-orange-100 bg-[#FFF9F2] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:bg-white hover:shadow-xl hover:shadow-orange-900/5"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg shadow-orange-500/20 transition duration-300 group-hover:rotate-6">
                      <Icon size={30} />
                    </div>

                    <p className="mt-7 text-sm font-bold tracking-widest text-orange-500">
                      0{index + 1}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {feature.description}
                    </p>

                    <div className="mt-6 h-1 w-12 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-20" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full border-[35px] border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full border-[45px] border-white/10" />

            <div className="relative z-10">
              <Pizza size={44} className="mx-auto" />

              <h2 className="mt-5 text-3xl font-black sm:text-4xl lg:text-5xl">
                Ready for Your Next Favorite?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-orange-50">
                Your perfect pizza is just a few clicks away. Explore our menu
                and make your next meal a delicious one.
              </p>

              <Link
                to="/menu"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-extrabold text-orange-600 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-orange-50"
              >
                Order Your Pizza
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>

    </>
  );
};

export default About;
