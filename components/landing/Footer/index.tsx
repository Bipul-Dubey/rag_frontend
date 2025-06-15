import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-white/10 py-6 px-6 sm:px-10 lg:px-24 text-white text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/60">
          &copy; {new Date().getFullYear()} KnowYourDocs. All rights reserved.
        </p>
        <div className="flex gap-4 text-white/50">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
