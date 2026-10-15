import { Link } from "react-router-dom";
import {
  Pizza,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Heart,
  ChevronRight,
} from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const helpLinks = [
    { name: "My Cart", path: "/cart" },
    { name: "My Orders", path: "/orders" },
    { name: "My Account", path: "/profile" },
    { name: "FAQs", path: "/faq" },
  ];




  return (
    <>

    <footer className="relative mt-20 overflow-hidden bg-[#101010] text-gray-300">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Newsletter section */}
        <div className="relative -top-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#24201d] via-[#201b18] to-[#2b1712] p-6 shadow-2xl sm:p-8 lg:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">
                <Pizza size={15} />
                Pizza Lovers Club
              </span>

              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Get cheesy deals in your inbox!
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
                Subscribe for special offers, new flavors, and delicious
                surprises.
              </p>
            </div>

            <form
              className="flex w-full max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email address"
                required
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white transition duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="PizzaHub home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <Pizza size={27} />
              </span>

              <span className="text-2xl font-black tracking-tight text-white">
                Pizza<span className="text-orange-500">Hub</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Freshly baked, loaded with love, and delivered to your door.
              Every slice is made to bring a little more happiness to your day.
            </p>

            
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-orange-400"
                  >
                    <ChevronRight
                      size={15}
                      className="text-orange-500 transition group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer support */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Customer Support
            </h3>

            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-orange-400"
                  >
                    <ChevronRight
                      size={15}
                      className="text-orange-500 transition group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs leading-5 text-gray-500">
              Some pages may be unavailable until their routes are implemented.
            </p>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Get In Touch
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Our Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Add your restaurant address here
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Call Us
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Add your phone number
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Email Us
                  </p>
                  <p className="mt-1 break-all text-sm text-gray-400">
                    support@pizzahub.example
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Opening Hours
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Set your restaurant's actual hours
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="font-semibold text-white">PizzaHub</span>.
            All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-gray-500">
            Made with
            <Heart
              size={15}
              className="fill-orange-500 text-orange-500"
            />
            for pizza lovers
          </p>

          <div className="flex gap-5 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-500 transition hover:text-orange-400"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 transition hover:text-orange-400"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>

    </>
  );
};

export default Footer;
