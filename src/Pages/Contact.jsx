import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { Mail, Phone, Clock, Send } from "lucide-react";
import Footer from "../Components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      toast.error("Your message must contain at least 10 characters.");
      return;
    }

    setIsSubmitting(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    toast.success("Thank you! Your message passed validation.");

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[#FFF9F2]">
        <Navbar />

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <p className="mb-3 font-semibold uppercase tracking-widest text-orange-600">
                Get in Touch
              </p>

              <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl">
                We'd Love to{" "}
                <span className="text-orange-500">Hear from You.</span>
              </h1>

              <p className="mt-6 leading-8 text-gray-600">
                Have a question about your order or our menu? Send us a message
                and our team will be happy to help.
              </p>

              <div className="mt-8 space-y-5 text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-medium">support@pizzahub.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Opening Hours</p>
                    <p className="font-medium">Every day: 10 AM - 11 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl bg-white p-6 shadow-xl shadow-orange-100/50 md:p-8"
            >
              <div>
                <label
                  htmlFor="contactName"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Your Name
                </label>

                <input
                  id="contactName"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="contactEmail"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contactMessage"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="contactMessage"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  minLength={10}
                  maxLength={2000}
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </span>
              </button>

              <p className="text-xs leading-5 text-gray-400">
                This demo validates your message locally. It does not send or
                store messages yet.
              </p>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
