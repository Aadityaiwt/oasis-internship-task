import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import {
  Pizza,
  ShoppingCart,
  Menu,
  X,
  Search,
} from "lucide-react";

const Navbar = ({ search: externalSearch, onSearchChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  const search = externalSearch ?? localSearch;
  const setSearch = onSearchChange ?? setLocalSearch;

  const { cartCount } = useCart();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Announcement bar: scrolls away */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 text-center text-sm font-medium text-white">
        Freshly baked happiness, delivered to your door!
      </div>

      {/* Logo and navigation: sticks to the top */}
      <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#FFF9F2] shadow-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex shrink-0 items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-orange-200">
                <Pizza size={28} strokeWidth={2.5} />
              </div>

              <div>
                <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                  Pizza<span className="text-red-600">Hub</span>
                </h1>
                <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Slice of happiness
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-semibold text-gray-600 transition hover:text-red-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop search */}
            <div className="hidden max-w-xs flex-1 items-center rounded-full border border-orange-200 bg-white px-4 py-2.5 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100 md:flex">
              <Search size={19} className="shrink-0 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search delicious pizza..."
                className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-3">
              <Link
                to="/cart"
                aria-label="Open shopping cart"
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 text-gray-700 transition hover:bg-orange-50 hover:text-red-600"
              >
                <ShoppingCart size={22} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {cartCount}
                </span>
              </Link>

              <Link
                to="/login"
                className="hidden rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-red-200 transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
              >
                Login
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-200 text-gray-800 transition hover:bg-orange-50 lg:hidden"
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="border-t border-orange-100 py-4 lg:hidden">
              {/* Mobile search */}
              <div className="mb-4 flex items-center rounded-xl border border-orange-200 bg-white px-3 py-3 md:hidden">
                <Search size={19} className="shrink-0 text-gray-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search pizza..."
                  className="ml-2 w-full bg-transparent text-sm outline-none"
                />
              </div>

              {/* Mobile links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-orange-50 hover:text-red-600"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3 text-center font-bold text-white sm:hidden"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;