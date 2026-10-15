import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import PopularPizzas from '../Components/PopularPizzas'
import Footer from '../Components/Footer'

const Menu = () => {
    const [search, setSearch] = useState("");

  return (
    <>
      <div className="min-h-screen bg-[#FFF9F2]">
      <Navbar search={search} onSearchChange={setSearch} />

      <section className="px-6 py-12 text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-orange-600">
          Freshly baked happiness
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl">
          Explore Our <span className="text-orange-500">Menu</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Discover your favourite pizzas, made with fresh ingredients,
          delicious toppings, and lots of love.
        </p>
      </section>

      <PopularPizzas searchTerm={search} />
    </div>
    <Footer />
    </>
  )
}

export default Menu
