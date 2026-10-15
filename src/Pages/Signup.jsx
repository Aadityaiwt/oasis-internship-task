import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Pizza } from "lucide-react";
import { toast } from "react-toastify";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setError('')
    setSuccess('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (!formData.name.trim()) {
      setError('Please enter your full name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must contain at least 6 characters.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    toast.success("Account created successfully! Welcome to PizzaHub", {
  position: "top-right",
  autoClose: 3000,
});

setSuccess("");

    console.log('Signup form validated:', {
      name: formData.name.trim(),
      email: formData.email.trim(),
    })
  }

  return (
    <>
    <div className="min-h-screen bg-[#FFF9F2] pt-20">
      <Navbar />

      <main className="flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/60">

          <div className="px-8 pb-5 pt-9 text-center sm:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-white bg-orange-500 text-5xl">
              <Pizza size={44} className="mx-auto" />

            </div>

            <h1 className="mt-5 text-3xl font-extrabold text-gray-900">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Join PizzaHub and discover your favourite pizzas.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 px-8 pb-8 sm:px-10 sm:pb-10"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  minLength={6}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 pr-20 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-orange-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                autoComplete="new-password"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 p-3 text-sm font-medium text-red-600"
              >
                {error}
              </p>
            )}

            {success && (
              <p
                role="status"
                className="rounded-xl bg-green-50 p-3 text-sm font-medium text-green-700"
              >
                {success}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-500 py-3.5 font-bold text-white shadow-lg shadow-orange-200/60 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold text-orange-600 hover:text-red-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>

          <div className="border-t border-orange-100 bg-orange-50/50 px-6 py-5 text-center">
            <p className="text-xs text-gray-500">
              Fresh pizza, happy moments.
            </p>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Signup
