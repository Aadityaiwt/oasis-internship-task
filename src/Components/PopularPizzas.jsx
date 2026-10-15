import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Pizza } from "lucide-react";
import { toast } from "react-toastify";

const PopularPizzas = ({ searchTerm = "" }) => {
  const pizzas = [
    {
      id: 1,
      name: "Margherita Classic",
      category: "VEGETARIAN",
      description: "Fresh mozzarella, basil and signature tomato sauce.",
      price: 199,
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Pepperoni Feast",
      category: "CLASSIC FAVORITE",
      description: "Loaded pepperoni with rich cheese and herbs.",
      price: 299,
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=85",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Garden Supreme",
      category: "FRESH & FLAVORFUL",
      description: "Colorful veggies, olives, peppers and melted cheese.",
      price: 249,
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85",
      badge: "Fresh Pick",
    },
  ];

  const filteredPizzas = pizzas.filter((pizza) => {
    const query = searchTerm.trim().toLowerCase();

    return (
      pizza.name.toLowerCase().includes(query) ||
      pizza.category.toLowerCase().includes(query) ||
      pizza.description.toLowerCase().includes(query)
    );
  });

  const { addToCart } = useCart();

  return (
    <>
      <section id="menu" className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[3px] text-red-600">
                Made with love
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">
                Our Popular <span className="text-red-600">Pizzas</span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-500">
                Handcrafted with fresh ingredients, rich flavors, and the
                perfect amount of cheese.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex w-fit items-center gap-2 font-bold text-red-600 transition hover:gap-4"
            >
              Explore all pizzas <ArrowRight size={18} />
            </Link>
          </div>

          {/* Pizza cards */}

          {filteredPizzas.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPizzas.map((pizza) => (
                <article
                  key={pizza.id}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100"
                >
                  <div className="relative overflow-hidden bg-orange-50">
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      loading="lazy"
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-red-600 shadow-md">
                      {pizza.badge}
                    </span>

                    <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-2 text-sm font-bold text-gray-800 shadow-md">
                      <Star
                        size={14}
                        className="inline fill-orange-400 text-orange-400"
                      />{" "}
                      {pizza.rating}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-extrabold tracking-[2px] text-orange-600">
                      {pizza.category}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold text-gray-900">
                      {pizza.name}
                    </h3>

                    <p className="mt-3 min-h-12 text-sm leading-6 text-gray-500">
                      {pizza.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                      <div>
                        <p className="text-xs text-gray-400">Starting from</p>
                        <p className="mt-1 text-2xl font-black text-gray-900">
                          {"\u20B9"}
                          {pizza.price}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          addToCart(pizza);
                          toast.success(`${pizza.name} added to cart!`);
                        }}
                        className="w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-orange-200 bg-orange-50/50 px-6 py-16 text-center">
              <div className="flex justify-center text-orange-500">
                <Pizza size={52} strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
                No pizzas found
              </h3>
              <p className="mt-2 text-gray-500">
                Try searching with another pizza name.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PopularPizzas;
