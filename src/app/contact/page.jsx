// app/contact/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: ["123 Luxury Avenue", "Beverly Hills, CA 90210", "United States"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: ["+1 (888) 123-4567", "+1 (888) 765-4321"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: ["hello@luxurybrand.com", "support@luxurybrand.com"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Hours",
      details: ["Monday - Friday: 10AM - 7PM", "Saturday: 11AM - 6PM", "Sunday: By Appointment"],
    },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        * {
          cursor: default;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          letter-spacing: 0.02em;
          color: #1a1a1a;
          font-weight: 500;
        }

        .input-field {
          font-family: 'Cormorant Garamond', serif;
          width: 100%;
          padding: 14px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(26, 26, 46, 0.15);
          font-size: 16px;
          color: #1a1a1a;
          transition: all 0.3s ease;
          outline: none;
        }

        .input-field:focus {
          border-bottom-color: #8B7355;
        }

        .input-field::placeholder {
          color: #999;
          font-weight: 300;
          font-style: italic;
        }

        textarea.input-field {
          resize: none;
          min-height: 100px;
        }

        .submit-btn {
          font-family: 'Cormorant Garamond', serif;
          background: transparent;
          border: 1px solid #1a1a2e;
          padding: 14px 40px;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          color: #1a1a2e;
        }

        .submit-btn:hover {
          background: #1a1a2e;
          color: white;
          letter-spacing: 4px;
        }

        .info-card {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=90"
            alt="Contact Us"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#C4A77D] tracking-[0.3em] text-xs font-['Cormorant_Garamond'] block mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white tracking-tight">
              Contact Us
            </h1>
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-[#C4A77D] mx-auto mt-6"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/70 mt-6 font-['Cormorant_Garamond'] text-base tracking-[0.2em] font-light max-w-xl mx-auto"
          >
            WE'D LOVE TO HEAR FROM YOU
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Send a Message</h2>
            <div className="w-12 h-px bg-[#8B7355] mt-4 mb-8" />
            <p className="text-[#666] font-['Cormorant_Garamond'] text-lg mb-10">
              For inquiries about our collections, custom orders, or general questions, please fill out the form below.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1a1a2e]/5 p-8 text-center"
              >
                <svg className="w-16 h-16 text-[#8B7355] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#1a1a2e] mb-2">Thank You!</h3>
                <p className="font-['Cormorant_Garamond'] text-[#666] text-lg">
                  Your message has been sent. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="input-field"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    required
                    className="input-field"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                  style={{ cursor: 'pointer' }}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get in Touch</h2>
            <div className="w-12 h-px bg-[#8B7355] mt-4 mb-8" />
            <p className="text-[#666] font-['Cormorant_Garamond'] text-lg mb-10">
              Visit our flagship boutique or reach out through any of the channels below.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="info-card flex gap-5"
                >
                  <div className="text-[#8B7355] mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl text-[#1a1a2e] mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-['Cormorant_Garamond'] text-[#666] text-base leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-[#1a1a2e]/10">
              <h3 className="font-['Playfair_Display'] text-lg text-[#1a1a2e] mb-5">
                Follow Us
              </h3>
              <div className="flex gap-6">
                {["Instagram", "Facebook", "Pinterest", "YouTube"].map((social, i) => (
                  <button
                    key={i}
                    className="text-[#666] hover:text-[#8B7355] transition-colors duration-300 font-['Cormorant_Garamond'] text-sm tracking-wide"
                    style={{ cursor: 'pointer' }}
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[400px] w-full mt-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a2e] flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-white/40 font-['Cormorant_Garamond'] text-lg tracking-wide">
              123 Luxury Avenue, Beverly Hills, CA 90210
            </p>
            <p className="text-white/30 text-sm mt-2 font-['Cormorant_Garamond']">
              Interactive Map Loading...
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8B7355] tracking-[0.3em] text-xs font-['Cormorant_Garamond'] uppercase">
            Help Center
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl text-[#1a1a2e] mt-2">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-[#8B7355] mx-auto mt-5 mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {[
            {
              q: "Do you offer international shipping?",
              a: "Yes, we offer worldwide shipping with fully insured delivery. Shipping times and costs vary by destination."
            },
            {
              q: "Can I request a custom jewelry piece?",
              a: "Absolutely! Our bespoke service allows you to create a unique piece. Contact our concierge team to begin the consultation."
            },
            {
              q: "What is your return policy?",
              a: "We offer a 14-day return policy on unworn items in original condition. Custom pieces are final sale."
            },
            {
              q: "Do you provide jewelry cleaning services?",
              a: "Yes, we offer complimentary cleaning and inspection for all pieces purchased from our boutique."
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#1a1a2e]/10 pb-5"
            >
              <h3 className="font-['Playfair_Display'] text-lg text-[#1a1a2e] mb-2">
                {faq.q}
              </h3>
              <p className="font-['Cormorant_Garamond'] text-[#666] text-base leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Banner */}
      <div className="bg-[#1a1a2e] py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white font-normal tracking-wide mb-4">
              Join Our Inner Circle
            </h3>
            <div className="w-12 h-px bg-[#8B7355] mx-auto mb-6" />
            <p className="text-white/50 font-['Cormorant_Garamond'] text-base tracking-wide max-w-2xl mx-auto font-light mb-8">
              Subscribe to receive exclusive updates, early access to collections, and special invitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/30 font-['Cormorant_Garamond'] text-base outline-none focus:border-[#8B7355] transition-colors"
                style={{ cursor: 'text' }}
              />
              <button 
                className="px-8 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-['Cormorant_Garamond'] text-sm tracking-[0.2em] font-light"
                style={{ cursor: 'pointer' }}
              >
                SUBSCRIBE
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}