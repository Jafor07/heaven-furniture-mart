"use client";

import { type FormEvent, useState } from "react";

const initialState = {
  name: "",
  phone: "",
  furnitureType: "",
  style: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Furniture Type: ${form.furnitureType || "Not provided"}`,
      `Preferred Style: ${form.style || "Not provided"}`,
      `Message: ${form.message || "Not provided"}`,
    ].join("\n");

    const url = `https://wa.me/8801960481983?text=${encodeURIComponent(
      `Hi Heaven Furniture Mart, I'd like a free design consultation.\n\n${text}`
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-brown">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-brown/20 bg-white px-4 py-3 text-brown placeholder:text-brown/50"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brown">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-brown/20 bg-white px-4 py-3 text-brown placeholder:text-brown/50"
            placeholder="Your phone number"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="furnitureType"
            className="mb-2 block text-sm font-medium text-brown"
          >
            Furniture Type
          </label>
          <input
            id="furnitureType"
            name="furnitureType"
            value={form.furnitureType}
            onChange={handleChange}
            className="w-full rounded-md border border-brown/20 bg-white px-4 py-3 text-brown placeholder:text-brown/50"
            placeholder="Sofa, bed, dining set..."
          />
        </div>

        <div>
          <label htmlFor="style" className="mb-2 block text-sm font-medium text-brown">
            Preferred Style
          </label>
          <input
            id="style"
            name="style"
            value={form.style}
            onChange={handleChange}
            className="w-full rounded-md border border-brown/20 bg-white px-4 py-3 text-brown placeholder:text-brown/50"
            placeholder="Modern, classic, minimal..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brown">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-md border border-brown/20 bg-white px-4 py-3 text-brown placeholder:text-brown/50"
          placeholder="Tell us about your space, size, and ideas."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-brass px-6 py-3 text-sm font-medium tracking-wide text-charcoal-teal"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
