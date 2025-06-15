import React from "react";
import Image from "next/image";
import { Mail, MessageSquare, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-24 text-white relative overflow-hidden">
      {/* 🔮 Background Pulses */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-[375px] h-[375px] bg-blue-600 rounded-full blur-[135px] opacity-25 absolute -bottom-20 left-0 animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="w-[375px] h-[375px] bg-purple-600 rounded-full blur-[135px] opacity-25 absolute -top-20 right-0 animate-[pulse_6s_ease-in-out_infinite_3s]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-white/70 text-lg mb-12 text-center max-w-xl mx-auto">
          {`Have questions or want to reach out? We'd love to hear from you.`}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ✏️ Form Section with Logo on Top */}
          <div>
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="mx-auto lg:mx-0"
              />
            </div>

            <form className="grid gap-6 text-left">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block mb-1 text-sm text-white/70">
                    Name
                  </label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-md p-3 backdrop-blur-md">
                    <User className="w-5 h-5 text-purple-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent outline-none text-white placeholder-white/50"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block mb-1 text-sm text-white/70">
                    Email
                  </label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-md p-3 backdrop-blur-md">
                    <Mail className="w-5 h-5 text-purple-400 mr-2" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-transparent outline-none text-white placeholder-white/50"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm text-white/70">
                  Message
                </label>
                <div className="flex items-start bg-white/5 border border-white/10 rounded-md p-3 backdrop-blur-md">
                  <MessageSquare className="w-5 h-5 text-purple-400 mt-1 mr-2" />
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full bg-transparent outline-none text-white placeholder-white/50 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-6 py-3 rounded-full shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 🖼️ Right Side Image (hidden on small screens) */}
          <div className="hidden lg:block">
            <Image
              src="/contact_illustration.png"
              alt="Contact Illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
